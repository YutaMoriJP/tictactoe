import styled from "styled-components";

const SquareStyled = styled.article`
  border: 4px solid #212529;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    border: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    font-size: 5rem;
    color: ${props => (props.x ? "#a5d8ff" : "#fcc2d7")};
    background-color: ${({ winner, x }) =>
      winner && x ? "#099268" : winner && !x ? "#343a40" : "white"};
  }
`;

export default SquareStyled;
