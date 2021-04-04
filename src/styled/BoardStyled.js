import styled from "styled-components";

export const BoardStyled = styled.article`
  border: 4px solid #212529;
  width: 100%;
  border-radius: 5px;
  max-width: 500px;
  min-width: 250px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 100px;
  margin: 10px auto;
`;
