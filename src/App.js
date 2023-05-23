import React, { useState } from 'react';
import TBoard from './components/TBoard';
import "./components/Square.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, } from 'react-bootstrap'
import './App.css'

export default function Game() {
  const [history, setHistory] = useState([Array(27).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = history.slice(0, currentMove + 1);
    nextHistory.push(nextSquares);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    const nextHistory = history.slice(0, nextMove + 1);
    setHistory(nextHistory);
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    const description = move === 0 ? 'Go to game start' : `Go to move #${move}`;
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className='back min-vh-100 pt-10'>
    <div className="game ml-24">
        <Col xs={3}>
          <div className="game-board">
            <TBoard xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
          </div>
        </Col>

        <Col xs={2}>
          <div className="game-info font-semibold">
            <ol>{moves}</ol>
          </div>
        </Col>

        <Col xs={7}>
          <div className='mr-5'>
            <p className='ml-10 text-xl font-semibold'>Rules: <br /> The rules for 3D tictactoe are the same except for these changes Instead of a 3x3 grid, you have three 3x3 boards stacked on top of each  other, forming a 3D cube. <br />1. Each board represents a different plane in the cube: top, middle, and bottom layer. <br />2. Winning Condition: In addition to winning on a 2D plane (horizontal, vertical, or diagonal lines), players can also win by forming a line across the three boards in the 3D space. This includes lines that span across different planes of the cube.<br /> 3. Vertical Lines: A vertical winning line is formed by aligning three symbols (X or O) vertically in the same column across the three boards. For example, if a player places their symbols in the top-left cell of the top board, the middle board, and the bottom board, they would form a vertical winning line.<br />4. Diagonal Lines: A diagonal winning line is formed by aligning three symbols (X or O) diagonally. For example, the top-left cell of the top board, the center cell of the middle board, and the bottom-right cell of the bottom board would form a winning diagonal line.<br />5. Single-Board Lines: Players can still win by forming a line within a single board, following the traditional Tic-Tac-Toe rules of forming horizontal, vertical, or diagonal lines.</p>
          </div>
        </Col>

    </div>
    </div>
  );
}
