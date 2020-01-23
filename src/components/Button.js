import styled from "styled-components";

import { colours } from "../theme";

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
        background-color: ${colours.primary};
        border: 2px solid ${colours.primary};
      `;
    }
  }};
`;

export default Button;
