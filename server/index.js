const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

// Middleware
app.use(cors());  // Enable CORS for all routes
app.use(express.json());
app.use(express.static('public'));

// Game state
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

// Helper function to check for a winner
const checkWinner = () => {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameActive = false;
      return board[a];
    }
  }

  return board.includes('') ? null : 'Draw';
};

// Routes
app.get('/api/status', (req, res) => {
  res.json({ board, currentPlayer, gameActive });
});

app.post('/api/move', (req, res) => {
  const { index } = req.body;

  if (gameActive && board[index] === '') {
    board[index] = currentPlayer;
    const winner = checkWinner();
    if (winner) {
      res.json({ success: true, board, winner });
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      res.json({ success: true, board });
    }
  } else {
    res.status(400).json({ success: false, message: 'Invalid move' });
  }
});

app.post('/api/reset', (req, res) => {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  res.json({ success: true, board, currentPlayer });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});