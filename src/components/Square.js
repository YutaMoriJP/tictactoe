import React from "react";
import SquareStyled from "../styled/SquareStyled";

const Square = ({ value, onClick, isOver, winningFormula, index }) => {
  const winner = isOver && winningFormula && winningFormula.includes(index);
  console.log(winningFormula);
  console.log(winner);
  console.log(index);
  return (
    <SquareStyled x={/x/i.test(value) ? 1 : 0} winner={winner ? 1 : 0}>
      <h1 aria-label="button" onClick={onClick}>
        {value}
      </h1>
    </SquareStyled>
  );
};

export default Square;
