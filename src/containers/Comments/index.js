import React from "react";
import { connect } from "react-redux";

import { retrieveComments } from "../../actions";

class Comments extends React.Component {
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
    const { comments, postId } = this.props;

    if (comments[postId] == null || comments[postId].fetchingComments) {
      return <div>Fetching comments</div>;
    }
    return comments[postId].map((comment, i) => (
      <div key={i}>{comment.name}</div>
    ));
  }
}

const mapStateToProps = state => {
  const { items } = state.comments;
  return { comments: items };
};

export default connect(mapStateToProps)(Comments);
