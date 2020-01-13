import styled from "styled-components";

const Button = styled.div`
  border-radius: 10px;
  padding: 5px 10px;
  font-weight: bold;

  ${props => {
    if (props.isDisabled) {
      return `
        cursor: default;
        background-color: lightgray;
        border: 2px solid lightgray;
      `;
    } else {
      return `
        cursor: pointer;
        background-color: #acd0e6;
        border: 2px solid #acd0e6;
      `;
    }
  }};
`;

export default Button;
