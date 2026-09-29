# Doctor Assistant Backend

Backend API for an AI persona hackathon project (Track 1: "Stand-In").
Built with Node.js and Express, this server connects a real person's
interview-based knowledge sheet to an LLM, so the AI can answer in
their voice and knows when to say "this needs the real person."

## Tech Stack
- Node.js + Express
- Groq/Gemini API (LLM)
- dotenv for API key management

## Endpoints
- `POST /ask` — takes `{ "question": "..." }`, returns `{ "answer": "..." }`

## Setup
1. `npm install`
2. Add your API key to a `.env` file: `GROQ_API_KEY=your_key`
3. `node server.js`

## Team
Built for [hackathon name] by Team [team name].
