import React, { Component } from "react";
import PropTypes from "prop-types";

class Comment extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  };

  state = {
    isShowingComments: false
  };

  render() {
    const { name, body, email } = this.props;

    return (
      <div style={{ marginTop: "1em", borderTop: "dotted gray 2px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <strong>{name}</strong>
          <a href={"mailto:" + email}>{email}</a>
        </div>
        <div>{body}</div>
      </div>
    );
  }
}

export default Comment;
