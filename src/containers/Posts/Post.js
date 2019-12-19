import React, { Component } from "react";
import { connect } from "react-redux";

import Comments from "../Comments";

class Post extends Component {
  state = {
    isShowingComments: false
  };

  render() {
    const { id, title, body, index } = this.props;

    const { isShowingComments } = this.state;

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
        </div>
        <div>{body}</div>
        <button
          onClick={() => {
            this.setState({ isShowingComments: !isShowingComments });
          }}
        >
          {isShowingComments ? "Hide" : "Comments"}
        </button>
        {isShowingComments && <Comments postId={id} />}
      </div>
    );
  }
}

export default Post;
