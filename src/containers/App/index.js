import React from "react";
import { connect } from "react-redux";

import Header from "../Header";
import Toaster from "../../components/Toaster";
import Posts from "../Posts";
import { updateScrollY, updateScreenWidth } from "../../actions/userMetrics";

class App extends React.Component {
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
        <Toaster>
          This app explores react lifecycles, redux, responsive design and more.
          See more{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.github.com/taq2/forum-app"
          >
            here
          </a>
          .
        </Toaster>
      </>
    );
  }
}

export default connect()(App);
