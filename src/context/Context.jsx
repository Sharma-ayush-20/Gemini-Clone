import React, { createContext, useState } from "react";
import runChat from '../config/gemini.js';

//create and export context
export const GeminiContext = createContext();

//create and export contextprovider 
export const GeminiContextProvider = (props) => {

    const [input, setInput] = useState(""); //jo bhi input yaha 
    const [recentPrompt, setRecentPrompt] = useState(""); //ye input ka result
    const [prevPrompts, setprevPrompts] = useState([]); // history of prompt
    const [showResult, setShowResult] = useState(false); //jo prompt and result ko show karne ke liye
    const [loading, setLoading] = useState(false); //loader generate hoga
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResultData(prev => prev + nextWord)
        }, 75 * index)
    }

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    }

    const onSent = async (prompt) => {
        try {
            setResultData("")
            setLoading(true)
            setShowResult(true)
            let response;
            if (prompt !== undefined) {
                response = await runChat(prompt);
                setRecentPrompt(prompt)
            }
            else {
                setprevPrompts(prev => [...prev, input])
                setRecentPrompt(input)
                response = await runChat(input)
            }
            let responseArray = response.split("**");
            let newResponse = "";

            for (let i = 0; i < responseArray.length; i++) {
                if (i % 2 === 0) {
                    newResponse += responseArray[i];
                } else {
                    newResponse += "<b>" + responseArray[i] + "</b>";
                }
            }

            let newResponse2 = newResponse.split("*").join("</br>");
            let newResponseArray = newResponse2.split(" ");
            for (let i = 0; i < newResponseArray.length; i++) {
                const nextWord = newResponseArray[i];
                delayPara(i, nextWord + " ")
            }

            setLoading(false)
            setInput("")
            console.log("Message sent successfully");
            // return response;
        } catch (err) {
            console.error("Error occurred at onSent Function ", err);
            return "Sorry, I encountered an error processing your request.";
        }
    }


    return (
        <GeminiContext.Provider
            value={{
                onSent,
                prevPrompts,
                setprevPrompts,
                setRecentPrompt,
                recentPrompt,
                showResult,
                loading,
                resultData,
                input,
                setInput,
                newChat,
            }}>
            {props.children}
        </GeminiContext.Provider>
    );
};
