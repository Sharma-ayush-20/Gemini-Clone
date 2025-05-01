import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets.js'
import { GeminiContext } from '../../context/Context.jsx'


function Sidebar() {

  const [extended, setExtended] = useState(false)
  //context
  const {
    onSent,
    prevPrompts,
    setprevPrompts,
    newChat,
  } = useContext(GeminiContext)

  const loadPrompt = async (prompt) => {

    if (!prevPrompts.includes(prompt)) {
      setprevPrompts(prev => [...prev, prompt])
    }
    await onSent(prompt)
  }


  function handleMenu() {
    if (extended) {
      setExtended(false)
    } else {
      setExtended(true)
    }

  }

  return (
    <div className='sidebar'>
      <div className="top">
        <img src={assets.menu_icon}
          alt="menu-icon"
          className='menu'
          onClick={handleMenu}
        />

        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="Plus-icon" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ?

          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div key={index} onClick={() => loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="msg" />
                  <p>{item.slice(0, 18)} ...</p>
                </div>
              )
            })}
          </div>
          : null}


      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question-icon" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="question-icon" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="question-icon" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar