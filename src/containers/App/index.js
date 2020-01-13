import React from "react";
import styled from "styled-components";
import { screenWidth } from "../../theme";

import Header from "../Header";
import Posts from "../Posts";

const Container = styled.div`
  @media (max-width: ${screenWidth.tablet}px) {
    width: 98%;
    margin: 0px 1%;
  }
  width: 80%;
  margin: 0px 10%;
`;

function App() {
  return (
    <>
      <Header />
      <Container>
        <Posts />
      </Container>
    </>
  );
}

export default App;
