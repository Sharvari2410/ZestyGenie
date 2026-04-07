# ZestyGenie - AI Recipe Generator

A production-ready AI-driven recipe web application built with React, Tailwind CSS, Vite, Express, and OpenAI/Ollama.

## Project Structure

- `/frontend` - React + Vite application
- `/backend` - Express API server

## AI Provider Options

The app supports multiple AI providers for recipe generation:

### 1. OpenAI (Default)
- Requires API key with credits
- High-quality responses
- Set `AI_PROVIDER=openai` and add your `OPENAI_API_KEY`

### 2. Ollama (Free, Local)
- Completely free, runs on your machine
- No API key required
- Install Ollama: https://ollama.ai/
- Run: `ollama pull llama2`
- Set `AI_PROVIDER=ollama`

### 3. Mock Mode (For Testing)
- Returns sample recipes without API calls
- Perfect for development/testing
- Set `AI_PROVIDER=mock`

## Setup Instructions

### Backend Environment Variables

Create `backend/.env` from the example:

```env
OPENAI_API_KEY=your_openai_api_key_here
CLIENT_URL=http://localhost:5173
AI_PROVIDER=mock  # Change to 'openai' or 'ollama' as needed
```

### 2. Frontend

1. Open a second terminal and navigate to `frontend`:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

### 3. Application Flow

- Visit `http://localhost:5173`
- Enter ingredients and submit
- The app calls `POST /generate-recipe` on the backend
- The backend uses OpenAI to produce structured recipe JSON
- The recipe is displayed in the UI
- Saved recipes persist in local storage

## Available Commands

### Backend
- `npm run dev` - start backend in development mode
- `npm start` - start backend normally

### Frontend
- `npm run dev` - start frontend
- `npm run build` - build production frontend
- `npm run preview` - preview production build
