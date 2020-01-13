import styled from "styled-components";

const Button = styled.div`
  cursor: pointer;
  background-color: ${({ isDisabled }) =>
    isDisabled ? "lightgray" : "lightblue"};
  border-radius: 10px;
  padding: 5px 10px;
  font-weight: bold;
  border: 2px solid
    ${({ isDisabled }) => (isDisabled ? "lightgray" : "#acd0e6")};
`;

export default Button;
