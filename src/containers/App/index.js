import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { retrievePosts } from "../../actions";

import Posts from "../Posts";

class App extends React.Component {
  // static propTypes = {
  //   fetchingPosts: PropTypes.bool.isRequired,
  //   posts: PropTypes.array.isRequired,
  //
  //   dispatch: PropTypes.func.isRequired
  // };
  //
  //

  render() {
    // const { fetchingPosts, posts, error } = this.props;
    //
    // if (error) {
    //   return (
    //     <div>
    //       Sorry there was an error! Please don't <strong>ever</strong> click a
    //       button that says 'Break me'!
    //     </div>
    //   );
    // }
    //
    // if (fetchingPosts || posts.length === 0) {
    //   return <h3>Loading Posts!</h3>;
    // }

    // TODO - add styles to css file
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

// const mapStateToProps = state => {
//   const { fetching, items, error } = state.posts;
//
//   return {
//     fetchingPosts: fetching,
//     posts: items,
//     error
//   };
// };

export default connect()(App);
