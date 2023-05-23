import React from "react";
import "./Square.css";

function SquareB({ value = null, onSquareClick, wincolor = false }) {
  const textColor = wincolor ? 'goldenrod' : 'black';
    return (
      <button className="squareB" style={{ color: textColor }} onClick={onSquareClick}>
        {value}
      </button>
    );
  }

export default SquareB