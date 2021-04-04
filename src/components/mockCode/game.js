import React, { useState } from "react";
import styled from "styled-components";
import { helper, generateBoard } from "./helper";

const Container = styled.article`
  box-sizing: border-box;
  display: flex;
  border: 5px solid black;
  width: 610px;
  margin: auto;
  justify-content: center;
  flex-flow: row wrap;
`;

const Item = styled.article`
  flex: 1 1 200px;
  button {
    width: 100%;
    padding: 10px;
    color: black;
    font-size: 2rem;
    background-color: lightseagreen;
    border: 0;
    cursor: pointer;
  }
`;

const MockGame = () => {
  const [squares, setSquares] = useState(generateBoard());
  const [x, setX] = useState(true);
  const winner = helper(squares);
  const reset = () => setSquares(generateBoard());
  const handleClick = index => {
    const copy = [...squares];
    if (winner.gameOver || copy[index]) return;
    copy[index] = x ? "X" : "O";
    setSquares(copy);
    setX(prevX => !prevX);
  };
  React.useEffect(() => {
    const { gameOver } = winner;
    if (gameOver) alert("game over");
  });
  return (
    <Container>
      <MockBoard squares={squares} handleClick={handleClick} />
      <button onClick={reset}>reset</button>
    </Container>
  );
};

const MockBoard = ({ squares, handleClick }) =>
  squares.map((square, index) => (
    <MockSquare
      key={index}
      square={square}
      handleClick={() => handleClick(index)}
    />
  ));

const MockSquare = ({ square, handleClick }) => (
  <Item>
    <button onClick={handleClick}>{!square ? "null" : square}</button>
  </Item>
);

export default MockGame;
