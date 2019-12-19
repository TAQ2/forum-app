import React from "react";
import { connect } from "react-redux";
import { retrieveComments, removeComments } from "../../actions";

class Post extends React.Component {
  // TODO - add prop types

  render() {
    const {
      dispatch,
      fetchingComments,
      index,
      title,
      id,
      body,
      comments,
      postId
    } = this.props;
    // TODO - add styles to css file
    // TODO - add loading UI for comments
    // TODO - currently only show comments for one post at a time only, would
    // reconsider this if I had more time by moving the comments into its own components

    return (
      <div style={{ marginBottom: 20, marginTop: 20 }}>
        {index !== 0 && <hr />}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{ marginBottom: 10, fontSize: "1.2em", fontWeight: "bold" }}
          >
            {title}
          </div>
          <button
            onClick={e => {
              if (postId === id) {
                dispatch(removeComments());
              } else {
                dispatch(retrieveComments(id));
              }
            }}
          >
            {postId === id ? "Hide" : "Comments"}
          </button>
        </div>
        <div>{body}</div>
        <br />
        <br />
        <div>
          {postId !== id ||
          fetchingComments ||
          comments == null ||
          comments.length === 0
            ? null
            : comments.map((comment, i) => {
                // TODO rather than query all of the items then render the first 5 elements. We should only query for 5 elements
                // TODO have a way to allow the user to look at all of the comments
                if (i > 4) {
                  return null;
                }

                return (
                  <div key={i} style={{ marginBottom: 10 }}>
                    <div
                      style={{
                        borderTop: " dotted 5px lightgray",
                        marginBottom: 5
                      }}
                    />
                    <i
                      style={{
                        display: "flex",
                        justifyContent: "space-between"
                      }}
                    >
                      <strong>{comment.name}</strong>
                      <a
                        href={"mailto:" + comment.email}
                        style={{ fontStyle: "normal" }}
                      >
                        {comment.email}
                      </a>
                    </i>
                    <i>{comment.body}</i>
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { fetchingComments, comments, postId } = state.comments;

  return {
    fetchingComments: fetchingComments,
    comments,
    postId
  };
};

export default connect(mapStateToProps)(Post);

// export default Post;
