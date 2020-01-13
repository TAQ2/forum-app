import React from "react";
import { connect } from "react-redux";

import Header from "../Header";
import Posts from "../Posts";
import { updateScrollY, updateScreenWidth } from "../../actions/userMetrics";

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
        <Posts />
      </>
    );
  }
}

export default connect()(App);
