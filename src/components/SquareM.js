import React from "react";
import "./Square.css";

function SquareM({ value = null, onSquareClick, wincolor = false }) {
  const textColor = wincolor ? 'goldenrod' : 'black';
    return (
      <button className="squareM" style={{ color: textColor }} onClick={onSquareClick}>
        {value}
      </button>
    );
  }

export default SquareM