# Word Game

An interactive word guessing game built with React and Node.js that uses AI to generate sentences and audio for an engaging learning experience.

## 🎮 Features

- **Audio Pronunciation**: Hear words pronounced using browser's Speech Synthesis API
- **AI-Generated Sentences**: Get contextual sentences using OpenAI's GPT-3.5-turbo
- **Text-to-Speech**: Listen to AI-generated sentences with OpenAI's TTS-1-HD model
- **Interactive Gameplay**: Type your guesses and get instant feedback
- **Modern UI**: Built with Material-UI for a clean, responsive design
- **Real-time Audio**: Stream audio directly from the backend

## 🚀 Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Material-UI** - Component library for UI
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **OpenAI API** - AI sentence generation and text-to-speech
- **CORS** - Cross-origin resource sharing

### Development Tools
- **Concurrently** - Run frontend and backend simultaneously
- **Nodemon** - Auto-restart server on changes
- **ESLint** - Code linting

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/thenickgarza/Word-Game.git
   cd word-game
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

4. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

5. **Set up environment variables**
   
   Create a `.env` file in the `backend/` directory:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=port_goes_her
   ```

### Running the Application

**Start both frontend and backend simultaneously:**
```bash
npm run dev
```

This will start:
- Frontend: http://localhost:5173 (Vite dev server)
- Backend: http://localhost:3000 (Express server)

**Or run them separately:**

Frontend only:
```bash
npm run client
```

Backend only:
```bash
npm run server
```

## 🎯 How to Play

1. **Start the Game**: Click "Let's Play" on the home screen
2. **Listen to Clues**: Use the audio buttons to hear the word or a sentence containing it
3. **Make Your Guess**: Type your answer in the input field
4. **Submit**: Click "Submit Guess" or press Enter
5. **Progress**: Correct guesses advance you to the next word

## 🔧 API Endpoints

### POST `/generate-sentence`
Generates an AI sentence and audio for a given word.

**Request:**
```json
{
  "word": "example"
}
```

**Response:**
```json
{
  "audioBuffer": [array of audio data],
  "sentence": "This is an example sentence with the word example."
}
```

## 🎨 Game Features

- **Word Database**: Curated list of words for gameplay
- **Audio Controls**: Play/pause audio with browser controls
- **Responsive Design**: Works on desktop and mobile
- **Real-time Feedback**: Instant validation of guesses
- **Progress Tracking**: Move through words sequentially

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the dist/ folder
```

### Backend (Railway/Heroku)
```bash
cd backend
# Deploy with your preferred platform
# Make sure to set OPENAI_API_KEY environment variable
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 🔗 Links

- [GitHub Repository](https://github.com/thenickgarza/Word-Game)
- [OpenAI API Documentation](https://platform.openai.com/docs)

---
