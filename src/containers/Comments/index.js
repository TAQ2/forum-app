import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import Loader from "../../components/Loader";
import Comment from "./Comment";
import AddComment from "./AddComment";
import { retrieveComments } from "../../actions/comments";
import { screenBreakpoints } from "../../theme";

const Container = styled.div`
  @media (max-width: ${screenBreakpoints.tablet}px) {
    width: 100%;
    margin-left: 0%;
  }

  margin-left: 5%;
  width: 90%;
`;

class Comments extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    postId: PropTypes.number.isRequired,
    comments: PropTypes.object,
    error: PropTypes.bool
  };

  componentDidMount() {
    const { dispatch, postId, comments } = this.props;
    if (comments == null || comments.fetchingComments) {
      dispatch(retrieveComments(postId));
    }
  }

  render() {
    const { comments, postId, error } = this.props;

    if (error) {
      return <div>Sorry there was an error! Please try again</div>;
    }

    if (comments == null || comments.fetchingComments) {
      return <Loader />;
    }
    return (
      <>
        <Container>
          {comments.nodes.map((comment, i) => (
            <Comment {...comment} key={i} />
          ))}
        </Container>
        <AddComment postId={postId} />
      </>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { items, error } = state.comments;
  return { comments: items[props.postId], error };
};

export default connect(mapStateToProps)(Comments);
