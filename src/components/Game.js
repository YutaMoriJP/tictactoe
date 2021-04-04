import React, { useState, useCallback, useEffect } from "react";
import Board from "./Board";
import { GameStyled } from "../styled/GameStyled";
import gameHelper from "../helpers/gameHelper";
import generateBoard from "../helpers/generateBoard";
import getWinningFormula from "../helpers/getWinningFormula";
import Button from "../styled/Button";

const Game = ({ setOver }) => {
  const [board, setBoard] = useState(generateBoard());
  const [x, setX] = useState(true);
  const noWinner = () => board.every(Boolean);
  const reset = useCallback(() => {
    setBoard(generateBoard());
    setOver(false);
  }, []);
  const winner = gameHelper(board);
  const winningFormula = getWinningFormula(board);
  const handleClick = i => {
    const copiedBoard = [...board];
    //winner variable return 'x' or 'o' if winner is determined
    //function also returns if board array's given index value is already filled with a value
    //with either 'x' or 'o', if not then it's null and function continues to execute
    if (winner || copiedBoard[i]) return;
    //if x is true, then we assign the given index value with 'X' and if not then with 'O'
    copiedBoard[i] = x ? "X" : "O";
    //copiedBoard is mutated, and represents the updated board,
    //it's then passed to the board state  setter function
    setBoard(copiedBoard);
    //toggle function that assures x and o are switched
    setX(prevX => !prevX);
  };
  const gameOver = () => {
    //function that determiens that game is over
    //used for turning disabled on the button off
    return noWinner() || winner;
  };
  useEffect(() => {
    //winner is true only if a player has won the game
    //in such case the over state is updated to true and turns confetti on
    //useEffect runs after ever render (state updates), so if game is won and component re-renders
    //then winner is also truthy and not undefined
    if (winner) {
      setOver(true);
    }
  });
  return (
    <>
      <GameStyled>
        <Board
          onClick={handleClick}
          squares={board}
          isOver={winner}
          winningFormula={winningFormula}
        />
        <Button
          onClick={reset}
          disabled={!gameOver()}
          over={!gameOver() ? 1 : 0}
        >
          reset game
        </Button>
        <h1>
          {winner
            ? `Winner is ${winner}`
            : noWinner()
            ? "No Winner"
            : `Next Player is ${x ? "X" : "O"}`}
        </h1>{" "}
      </GameStyled>
    </>
  );
};

export default Game;
