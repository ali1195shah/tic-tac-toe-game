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
    }
    
//     const newSquares = squares.slice();
//     newSquares[i] = isXNext ? 'X' : 'O';
//     setSquares(newSquares);
//     setIsXNext(!isXNext);
//   };

//   const winner = calculateWinner(squares);
//   const status = winner 
//     ? `Winner: ${winner}` 
//     : squares.every(square => square) 
//       ? 'Game ended in a draw!' 
//       : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="game">
      {/* <div 
      className="status"
      >{status}</div> */}
      <Board 
        squares={squares} 
        onClick={handleClick} 
      />
    </div>
  );
}


export default Game;