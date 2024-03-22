/* eslint-disable react/prop-types */
import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    const nextSquares = squares.slice();
    if (squares[i] || calculateWinner(squares)) {
      //jika ada isinya keluar isinya jadi tidak bisa double click
      return;
    }
    // if (xIsNext) {
    //   nextSquares[i] = "X";
    // } else {
    //   nextSquares[i] = "O";
    // } //kotak pertama di klik[X, null,null,null,null,null,null,null,null,]
    nextSquares[i] = xIsNext ? "X" : "O"; //ternary operator
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status = "";
  status = winner ? `Winner ${winner}` : `Next Player ${xIsNext ? "X" : "O"}`;
  // if (winner) {
  //   status = "Winner: " + winner;
  // } else {
  //   status = "Next Player: " + (xIsNext ? "X" : "O");
  // }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    // const a = lines[i][0]//0
    // const b = lines[i][1]//1
    // const c = lines[i][2]//2
    const [a, b, c] = lines[i];
    if (squares[a] == squares[b] && squares[b] == squares[c]) {
      return squares[a];
    }
  }
  return false;
}

export default Board;
