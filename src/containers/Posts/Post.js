import React, { Component } from "react";
import PropTypes from "prop-types";

import Comments from "../Comments";

class Post extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
  };

  state = {
    isShowingComments: false
  };

  render() {
    const { id, title, body, index } = this.props;

    const { isShowingComments } = this.state;

    return (
      <div style={{ marginBottom: 20, marginTop: 20 }}>
        {index !== 0 && <hr />}
        <div style={{ fontSize: "1.2em" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between"
            }}
          >
            <div
              style={{
                marginBottom: 10,
                fontSize: "1.2em",
                fontWeight: "bold"
              }}
            >
              {title}
            </div>
          </div>
          <div>{body}</div>
        </div>
        <button
          onClick={() => {
            this.setState({ isShowingComments: !isShowingComments });
          }}
          style={{ marginTop: 10 }}
        >
          {isShowingComments ? "Hide" : "Comments"}
        </button>
        {isShowingComments && (
          <div style={{ marginLeft: "5%", width: "90%" }}>
            <Comments postId={id} />
          </div>
        )}
      </div>
    );
  }
}

export default Post;
