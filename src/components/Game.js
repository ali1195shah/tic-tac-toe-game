import React, { useState } from 'react';
import Board from '../components/Board';
import calculateWinner from '../gamelogic/Logic'
import '../App.css';

function Game(){
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(squares);
  const isGameOver = winner || squares.every(square => square !== null);

  const handleClick = (i) => {
    if (squares[i] || isGameOver) {
      return;
    }
    
    const newSquares = squares.slice();
    newSquares[i] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const playAgain = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }

  const status = winner 
    ? `Winner: ${winner}` 
    : squares.every(square => square) 
      ? 'Game ended in a draw!' 
      : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="game">
      <div className="status">{status}</div>
      <Board 
        squares={squares} 
        onClick={handleClick}
        isGameOver={isGameOver}
      />
      {isGameOver && (
        <button className="playagain-button" onClick={playAgain}>
          Play Again
        </button>
      )}
      <button className='reset-button' onClick={resetGame} >Reset</button>
    </div>
  );
}

export default Game;