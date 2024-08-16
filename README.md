# Tic-Tac-Toe

A simple Tic-Tac-Toe game with a React frontend and an Express backend. Players can take turns, see the current player, and reset the game. The winner is displayed and persists after a page refresh.

## Features
- Interactive board that stores data on the server, data persists even after refreshing or switching browsers
- Game reset and winner notification

## API Endpoints
- **GET /api/status**: Get game state
- **POST /api/move**: Make a move
- **POST /api/reset**: Reset the game

## Notes
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5001`