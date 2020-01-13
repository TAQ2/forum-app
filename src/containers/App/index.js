import React from "react";
import styled from "styled-components";
import { screenBreakpoints } from "../../theme";
import { connect } from "react-redux";

import Header from "../Header";
import Posts from "../Posts";
import { updateScrollY, updateScreenWidth } from "../../actions/userMetrics";

// @Cleanup - this should be in posts
const Container = styled.div`
  @media (max-width: ${screenBreakpoints.tablet}px) {
    width: 98%;
    margin: 0px 1%;
  }

  width: 80%;
  margin: 0 auto;
  max-width: 1050px;
`;

class App extends React.Component {
  // @Cleanup - move user metrics logic into a new file
  updateScroll = () => {
    const winScrollY =
      document.body.scrollTop || document.documentElement.scrollTop;

    this.props.dispatch(updateScrollY(winScrollY));
  };

  updateScreen = () => {
    // @Incomplete - we should throttle this update
    this.props.dispatch(updateScreenWidth(window.innerWidth));
  };

  componentDidMount() {
    window.addEventListener("scroll", this.updateScroll);
    window.addEventListener("resize", this.updateScreen);
    this.updateScroll();
    this.updateScreen();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateScroll);
    window.removeEventListener("resize", this.updateScreen);
  }

  render() {
    return (
      <>
        <Header />
        <Container>
          <Posts />
        </Container>
      </>
    );
  }
}

export default connect()(App);
