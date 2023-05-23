import React from "react";

function SquareT({ value = null, onSquareClick, wincolor = false }) {
  const textColor = wincolor ? 'goldenrod' : 'black';

  return (
    <button className="squareT" style={{ color: textColor }} onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default SquareT;
