import React from "react";
import { Spring } from "react-spring/renderprops";
import styled from "styled-components";
import { connect } from "react-redux";

import { screenBreakpoints } from "../../theme";

const Container = styled.header`
  @media (max-width: ${screenBreakpoints.tablet}px) {
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
  render() {
    const { hasScrolled, screenWidth } = this.props;
    const isSmallScreen = screenWidth <= screenBreakpoints.small;

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
            {screenWidth > screenBreakpoints.tablet && (
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

export default connect(state => ({
  hasScrolled: state.userMetrics.scrollY > 0,
  screenWidth: state.userMetrics.screenWidth
}))(Header);
