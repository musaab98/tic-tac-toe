 # Noughts & Crosses — Tic-Tac-Toe

The most important part of your portfolio project is the README.md file found at the root of your repository.

This repository contains a simple web-based Tic-Tac-Toe game with a React client and a Node.js server. It can be run locally for development or with Docker Compose for a quick demo.

## Description

A lightweight Tic-Tac-Toe (Noughts & Crosses) application demonstrating a React frontend (`/client`) and a Node.js backend (`/server`). The app supports two-player games in the browser and is intended as a portfolio piece showcasing full-stack JavaScript development and Docker deployment.

## Motivation

This project was created to practice building a small full-stack app with a clear separation between client and server, and to demonstrate skills in React, Node.js, and containerized development for easy deployment and review by hiring managers.

## Quick Start

Prerequisites: Node.js (14+), npm, and optionally Docker & Docker Compose.

Run with Docker Compose (recommended for a quick demo):

```bash
docker-compose up --build
```

Run locally for development:

```bash
# Start server
cd server
npm install
npm start

# In a separate terminal, start client
cd ../client
npm install
npm start
```

Open http://localhost:3000 in your browser after starting the client.

## Usage

- Start a new game in the browser and invite another player (same machine or network).
- Click any empty cell to place your mark (X or O).
- The game detects a win or draw and highlights the result.

Server API (basic):

- **GET /api/status**: Get current game state
- **POST /api/move**: Make a move
- **POST /api/reset**: Reset the game

Default dev ports:

- Frontend: http://localhost:3000
- Backend: http://localhost:5001 (if configured that way in `server/index.js`)

## Contributing

- Fork the repo and create a new branch for your feature or bugfix.
- Open a pull request with a clear description of changes.
- Keep changes focused and add tests where appropriate.

If you'd like, I can also help add tests, CI, or a CONTRIBUTING.md with more details.
