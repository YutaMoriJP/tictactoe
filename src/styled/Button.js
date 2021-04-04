import styled from "styled-components";

const Button = styled.button`
  padding: 15px 35px;
  background-color: ${props => (props.over ? "#d0bfff" : "#5f3dc4")};
  text-transform: uppercase;
  color: white;
  border-radius: 5px;
  border: 0;
  cursor: ${props => !props.over && "pointer"};
  font-weight: 900;
`;

export default Button;
