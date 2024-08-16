import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const PORT = 5001;

function App() {
  const [board, setBoard] = useState([['', '', ''], ['', '', ''], ['', '', '']]);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    fetchGameStatus();
  }, []);

  const fetchGameStatus = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/status');
      const newBoard = [
        [response.data.board[0], response.data.board[1], response.data.board[2]],
        [response.data.board[3], response.data.board[4], response.data.board[5]],
        [response.data.board[6], response.data.board[7], response.data.board[8]],
      ];
      setBoard(newBoard);
      setCurrentPlayer(response.data.currentPlayer);
      setWinner(response.data.winner); // Updated to fetch the winner
    } catch (err) {
      console.error('Error fetching game status');
    }
  };

  const handleCellClick = async (row, col) => {
    if (winner) return; // Disable clicks if the game is already won

    try {
      const index = row * 3 + col;
      const response = await axios.post('http://localhost:5001/api/move', { index });
      const newBoard = [
        [response.data.board[0], response.data.board[1], response.data.board[2]],
        [response.data.board[3], response.data.board[4], response.data.board[5]],
        [response.data.board[6], response.data.board[7], response.data.board[8]],
      ];
      setBoard(newBoard);
      setCurrentPlayer(response.data.currentPlayer);
      setWinner(response.data.winner); // Update the winner after each move
    } catch (err) {
      // console.error('Error making move');
    }
  };

  const handleNewGame = async () => {
    try {
      const response = await axios.post('http://localhost:5001/api/reset');
      setBoard([['', '', ''], ['', '', ''], ['', '', ''],]);
      setCurrentPlayer('X');
      setWinner(null);
    } catch (err) {
      console.error('Error resetting game');
    }
  };

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <div className="status">
        <button onClick={handleNewGame}>New Game</button>
      </div>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <button
                key={colIndex}
                className="cell"
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                {cell}
              </button>
            ))}
          </div>
        ))}
      </div>
      {winner && <h2 className="winner">{winner} wins!</h2>}
    </div>
  );
}

export default App;