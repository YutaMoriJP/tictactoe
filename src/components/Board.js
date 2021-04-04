import React from "react";
import Square from "./Square";
import { BoardStyled } from "../styled/BoardStyled";

const Board = ({ squares, onClick, isOver, winningFormula }) => {
  return (
    <BoardStyled>
      {squares.map((square, i) => {
        return (
          <Square
            key={i}
            index={i}
            value={square}
            onClick={() => onClick(i)}
            isOver={isOver}
            winningFormula={winningFormula}
          />
        );
      })}
    </BoardStyled>
  );
};

export default Board;
