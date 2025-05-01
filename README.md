# Gemini Clone 

A modern React-based web application that integrates with Google's Gemini AI to provide an interactive and intelligent chat experience.

## Features

- **AI-Powered Conversations**: Interact with Google's Gemini 1.5 Pro model for intelligent responses
- **Real-time Typing Animation**: Responses appear with a natural typing effect
- **Chat History**: Keep track of your previous conversations
- **Responsive Design**: Works seamlessly on both mobile and desktop devices
- **Suggestion Cards**: Quick-start your conversations with pre-defined prompts
- **Collapsible Sidebar**: Easy navigation with a clean, collapsible sidebar
- **New Chat Functionality**: Start fresh conversations anytime

## Technologies Used

- **React.js**: Frontend library for building the user interface
- **Google Generative AI SDK**: Integration with Gemini AI model
- **Context API**: State management across components
- **CSS3**: Styling with responsive design principles
- **Vite**: Fast build tool and development server

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/gemini-chat-app.git
   cd gemini-chat-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Create a `.env` file in the root directory
   - Add your Google Gemini API key:
     ```
     VITE_FIREBASE_API_KEY=your_api_key_here
     ```
   - You can obtain an API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
gemini-chat-app/
├── src/
│   ├── assets/           # Images and icons
│   ├── components/       # React components
│   │   ├── Main/         # Main chat interface
│   │   └── Sidebar/      # Navigation sidebar
│   ├── config/           # API configuration
│   ├── context/          # React context for state management
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Entry point
├── .env                  # Environment variables (not in repo)
├── .gitignore            # Git ignore file
└── package.json          # Project dependencies
```

## Usage

- **Starting a New Chat**: Click the "New Chat" button in the sidebar
- **Sending a Message**: Type in the input field and click the send icon
- **Using Suggestions**: Click on any suggestion card to start a conversation
- **Viewing History**: Access your previous conversations from the sidebar

## Future Enhancements

- Voice input functionality
- Image recognition capabilities
- Theme customization options
- Export conversations to PDF
- Mobile app version

