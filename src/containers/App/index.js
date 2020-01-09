import React from "react";
import { Spring } from "react-spring/renderprops";
import styled from "styled-components";

import Posts from "../Posts";

const StyledHeader = styled.header`
  @media (max-width: 576px) {
    text-align: center;
  }

  font-size: 3em;
  font-family: Chomsky;
  padding-left: 5%;
  position: sticky;
  width: 100%;
  top: 0px;
`;

class App extends React.Component {
  state = { hasScrolled: false, isSmallScreen: window.innerWidth <= 576 };

  updateScrolled = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    this.setState({ hasScrolled: winScroll > 0 });
  };

  updateScreenSize = () => {
    this.setState({ isSmallScreen: window.innerWidth <= 576 });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.updateScrolled);
    window.addEventListener("resize", this.updateScreenSize);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateScrolled);
    window.removeEventListener("resize", this.updateScreenSize);
  }

  render() {
    const { hasScrolled, isSmallScreen } = this.state;

    return (
      <>
        {/* TODO - if the user scrolls down and then refreshes the page, the animation plays */}
        <Spring
          from={{
            fontSize: isSmallScreen ? "2em" : "3em",
            background: "linear-gradient(lightblue 0%, lightblue 100%)"
          }}
          to={{
            // fontSize: calculateFontSize(hasScrolled),
            fontSize: isSmallScreen ? "2em" : hasScrolled ? "2.5em" : "3em",
            background: hasScrolled
              ? "linear-gradient(white 90%, lightblue 10%)"
              : "linear-gradient(lightblue 0%, lightblue 100%)"
          }}
        >
          {props => <StyledHeader style={props}>Fake Latin News</StyledHeader>}
        </Spring>
        <div style={{ width: "80%", margin: "0px 10%" }}>
          <Posts />
        </div>
      </>
    );
  }
}

export default App;
