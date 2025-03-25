import React, { useState } from 'react';
import Board from './Board';
import '../App.css';

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

    const handleClick = (i) => {
        console.log(squares);
        if (squares[i]){
            return;
        }
    
    
    const newSquares = squares.slice();
    newSquares[i] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(squares);
  const status = winner 
    ? `Winner: ${winner}` 
    : squares.every(square => square) 
      ? 'Game ended in a draw!' 
      : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="game">
      <div 
      className="status"
      >{status}</div>
      <Board 
        squares={squares} 
        onClick={handleClick} 
      />
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


export default Game;