import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { connect } from "react-redux";

import { screenBreakpoints, colours } from "../../theme";
import { PropTypes } from "prop-types";

const Container = styled(animated.header)`
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

function Header({ hasScrolled, screenWidth }) {
  // @Cleanup - find a nicer way of generating the animation config
  const animation = useSpring({
    from: {
      fontSize: screenWidth <= screenBreakpoints.small ? "2em" : "3em"
    },
    fontSize:
      screenWidth <= screenBreakpoints.small
        ? "2em"
        : hasScrolled
        ? "2.5em"
        : "3em",
    background: hasScrolled
      ? `linear-gradient(white 90%, ${colours.primary} 10%)`
      : `linear-gradient(${colours.primary} 0%, ${colours.primary} 100%)`
  });

  return (
    <Container style={animation}>
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
  );
}

Header.propTypes = {
  hasScrolled: PropTypes.bool.isRequired,
  screenWidth: PropTypes.number.isRequired
};

export default connect(state => ({
  hasScrolled: state.userMetrics.scrollY > 0,
  screenWidth: state.userMetrics.screenWidth
}))(Header);
