import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Post from "./Post";
import { retrievePosts } from "../../actions";

class Posts extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    fetchingPosts: PropTypes.bool.isRequired,
    error: PropTypes.bool
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(retrievePosts());
  }

  render() {
    const { posts, fetchingPosts, error } = this.props;

    if (error) {
      // TODO should we use error boundaries?
      return (
        <div>
          Sorry there was an error! Please don't <strong>ever</strong> click a
          button that says 'Break me'!
        </div>
      );
    }

    if (fetchingPosts) {
      return <h3>Loading Posts!</h3>;
    }

    return posts.map((post, i) => (
      <Post
        key={post.id}
        id={post.id}
        title={post.title}
        body={post.body}
        index={i}
      />
    ));
  }
}

const mapStateToProps = state => {
  const { fetchingPosts, items, error } = state.posts;

  return {
    fetchingPosts,
    posts: items,
    error
  };
};

export default connect(mapStateToProps)(Posts);
