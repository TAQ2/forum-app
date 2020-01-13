import React from "react";
import { Spring } from "react-spring/renderprops";
import styled from "styled-components";
import { screenWidth } from "../../theme";

const Container = styled.header`
  @media (max-width: ${screenWidth.tablet}px) {
    justify-content: space-around;
  }

  font-family: Chomsky;
  padding: 0 5%;
  position: sticky;
  width: 100%;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.3em;
`;

class Header extends React.Component {
  state = { hasScrolled: false, screenSize: window.innerWidth };

  updateScrolled = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    this.setState({ hasScrolled: winScroll > 0 });
  };

  updateScreenSize = () => {
    this.setState({ screenSize: window.innerWidth });
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
    const { hasScrolled, screenSize } = this.state;
    const isSmallScreen = screenSize <= screenWidth.small;

    return (
      <Spring
        from={{
          fontSize: isSmallScreen ? "2em" : "3em",
          background: "linear-gradient(lightblue 0%, lightblue 100%)"
        }}
        to={{
          // @Incomplete - is there an easier way to assum the from config rather than copying it
          fontSize: isSmallScreen ? "2em" : hasScrolled ? "2.5em" : "3em",
          background: hasScrolled
            ? "linear-gradient(white 90%, lightblue 10%)"
            : "linear-gradient(lightblue 0%, lightblue 100%)"
        }}
      >
        {props => (
          <Container style={props}>
            <span>Fake Latin News</span>
            {screenSize > screenWidth.tablet && (
              <span
                style={{
                  fontSize: "0.5em",
                  color: "#666"
                }}
              >
                Lorem ipsum dolor sit amet
              </span>
            )}
          </Container>
        )}
      </Spring>
    );
  }
}

export default Header;
