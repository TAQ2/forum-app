import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import Loader from "../../components/Loader";
import Post from "./Post";
import { screenBreakpoints } from "../../theme";
import { retrievePosts } from "../../actions/posts";

const Container = styled.div`
  @media (max-width: ${screenBreakpoints.tablet}px) {
    width: 98%;
  }

  width: 80%;
  margin: 0 auto;
  max-width: 1050px;
`;

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
      return <div>Sorry there was an error! Please try again</div>;
    }

    if (fetchingPosts) {
      return <Loader />;
    }

    return (
      <Container>
        {posts.map((post, i) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            index={i}
          />
        ))}
      </Container>
    );
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
