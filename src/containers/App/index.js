import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { retrievePosts } from "../../actions";

import Posts from "../Posts";

class App extends React.Component {
  // TODO - add styles to css file
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  render() {
    return (
      <>
        <div style={{ backgroundColor: "red", textAlign: "center" }}>
          <button
            onClick={() => {
              this.props.dispatch(retrievePosts("BROKEN URL"));
            }}
            style={{ fontSize: 30 }}
          >
            Break Me!
          </button>
        </div>
        <div style={{ width: "80%", margin: "0px 10%" }}>
          <Posts />
        </div>
      </>
    );
  }
}

export default connect()(App);

// how to do the styling
// error boundaries and error handling
// bonus question
// seperate out actions into seperate files
// add tests?
// Design
