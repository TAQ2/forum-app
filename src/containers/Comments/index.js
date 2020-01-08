import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Comment from "./Comment";
import AddComment from "./AddComment";
import { retrieveComments } from "../../actions/comments";

class Comments extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    postId: PropTypes.number.isRequired,
    comments: PropTypes.object.isRequired,
    error: PropTypes.bool
  };

  state = {
    isLoading: true
  };

  componentDidMount() {
    const { dispatch, postId, comments } = this.props;
    // @Question - it doesn't matter if we set fetchingComments flag so do we
    // need it? Does it just improve readability
    if (comments[postId] == null || comments[postId].fetchingComments) {
      dispatch(retrieveComments(postId));
    }
  }

  render() {
    const { comments, postId, error } = this.props;

    if (error) {
      return <div>Sorry there was an error! Please try again</div>;
    }

    if (comments[postId] == null || comments[postId].fetchingComments) {
      return <div>Fetching comments</div>;
    }
    return (
      <>
        {comments[postId].map((comment, i) => (
          <Comment {...comment} key={i} />
        ))}
        <br />
        <AddComment postId={postId} />
      </>
    );
  }
}

const mapStateToProps = state => {
  const { items, error } = state.comments;
  return { comments: items, error };
};

export default connect(mapStateToProps)(Comments);
