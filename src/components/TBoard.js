import React from "react";
import SquareT from './SquareT'
import SquareB from './SquareB'
import SquareM from './SquareM'
import 'bootstrap/dist/css/bootstrap.min.css'

function TBoard({ xIsNext = true, squares = Array(27).fill(null), onPlay }) {
    function handleClick(i) {
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);

    const isWinningSquare = (squareIndex) => {
      if (winner && winner.includes(squareIndex)) {
        return true;
      }
      return false;
    };

    let status;
    if (winner) {
        status = 'Winner: ' + winner;

    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <div className="grid grid-cols-1">
            <div className="">
                <div className="status font-semibold">{status}</div>
                <div className="">
                    <div className="">
                        <div className="board-row">
                            <SquareT value={squares[0]} onSquareClick={() => handleClick(0)} wincolor={isWinningSquare(0)} />
                            <SquareT value={squares[1]} onSquareClick={() => handleClick(1)} wincolor={isWinningSquare(1)} />
                            <SquareT value={squares[2]} onSquareClick={() => handleClick(2)} wincolor={isWinningSquare(2)} />
                        </div>
                        <div className="board-row">
                            <SquareT value={squares[3]} onSquareClick={() => handleClick(3)} wincolor={isWinningSquare(3)}/>
                            <SquareT value={squares[4]} onSquareClick={() => handleClick(4)} wincolor={isWinningSquare(4)}/>
                            <SquareT value={squares[5]} onSquareClick={() => handleClick(5)} wincolor={isWinningSquare(5)}/>
                        </div>
                        <div className="board-row">
                            <SquareT value={squares[6]} onSquareClick={() => handleClick(6)} wincolor={isWinningSquare(6)}/>
                            <SquareT value={squares[7]} onSquareClick={() => handleClick(7)} wincolor={isWinningSquare(7)}/>
                            <SquareT value={squares[8]} onSquareClick={() => handleClick(8)} wincolor={isWinningSquare(8)}/>
                        </div>
                    </div>

                    <br></br>
                    <div>
                        <div className="board-row">
                            <SquareM value={squares[9]} onSquareClick={() => handleClick(9)} wincolor={isWinningSquare(9)}/>
                            <SquareM value={squares[10]} onSquareClick={() => handleClick(10)} wincolor={isWinningSquare(10)}/>
                            <SquareM value={squares[11]} onSquareClick={() => handleClick(11)} wincolor={isWinningSquare(11)}/>
                        </div>
                        <div className="board-row">
                            <SquareM value={squares[12]} onSquareClick={() => handleClick(12)} wincolor={isWinningSquare(12)}/>
                            <SquareM value={squares[13]} onSquareClick={() => handleClick(13)} wincolor={isWinningSquare(13)}/>
                            <SquareM value={squares[14]} onSquareClick={() => handleClick(14)} wincolor={isWinningSquare(14)}/>
                        </div>
                        <div className="board-row">
                            <SquareM value={squares[15]} onSquareClick={() => handleClick(15)} wincolor={isWinningSquare(15)}/>
                            <SquareM value={squares[16]} onSquareClick={() => handleClick(16)} wincolor={isWinningSquare(16)}/>
                            <SquareM value={squares[17]} onSquareClick={() => handleClick(17)} wincolor={isWinningSquare(17)}/>
                        </div>
                    </div>

                    <br></br>

                    <div>

                        <div className="board-row">
                            <SquareB value={squares[18]} onSquareClick={() => handleClick(18)} wincolor={isWinningSquare(18)}/>
                            <SquareB value={squares[19]} onSquareClick={() => handleClick(19)} wincolor={isWinningSquare(19)}/>
                            <SquareB value={squares[20]} onSquareClick={() => handleClick(20)} wincolor={isWinningSquare(20)}/>
                        </div>
                        <div className="board-row">
                            <SquareB value={squares[21]} onSquareClick={() => handleClick(21)} wincolor={isWinningSquare(21)}/>
                            <SquareB value={squares[22]} onSquareClick={() => handleClick(22)} wincolor={isWinningSquare(22)}/>
                            <SquareB value={squares[23]} onSquareClick={() => handleClick(23)} wincolor={isWinningSquare(23)}/>
                        </div>
                        <div className="board-row">
                            <SquareB value={squares[24]} onSquareClick={() => handleClick(24)} wincolor={isWinningSquare(24)}/>
                            <SquareB value={squares[25]} onSquareClick={() => handleClick(25)} wincolor={isWinningSquare(25)}/>
                            <SquareB value={squares[26]} onSquareClick={() => handleClick(26)} wincolor={isWinningSquare(26)}/>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        // top cube
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        // center cube
        [9, 10, 11],
        [12, 13, 14],
        [15, 16, 17],
        [9, 12, 15],
        [10, 13, 16],
        [11, 14, 17],
        [9, 13, 17],
        [11, 13, 15],
        // bottom cube
        [18, 19, 20],
        [21, 22, 23],
        [24, 25, 26],
        [18, 21, 24],
        [19, 22, 25],
        [20, 23, 26],
        [18, 22, 26],
        [19, 22, 24],
        // up and down
        [0, 9, 18],
        [1, 10, 19],
        [2, 11, 20],
        [3, 12, 21],
        [4, 13, 22],
        [5, 14, 23],
        [6, 15, 24],
        [7, 16, 25],
        [8, 17, 26],
        // 3d left right diagnals
        [0, 10, 20],
        [2, 10, 18],
        [3, 13, 23],
        [5, 13, 21],
        [6, 16, 26],
        [8, 16, 24],
        // 3d top bottom diagnals
        [0, 12, 24],
        [1, 13, 25],
        [2, 14, 26],
        [6, 12, 18],
        [7, 13, 19],
        [8, 14, 20],
        // 3d corners
        [0, 13, 26],
        [2, 13, 24],
        [6, 13, 20],
        [8, 13, 18],

    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
    
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          console.log(squares);
    
          return [a, b, c];
        }
      }
    
      return null;
    }

export default TBoard