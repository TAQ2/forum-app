import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "../components/Card";

class Comment extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  };

  render() {
    const { name, body, email } = this.props;

    return (
      <Card>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 10
          }}
        >
          <strong>{name}</strong>
          <a href={"mailto:" + email}>{email}</a>
        </div>
        <div>{body}</div>
      </Card>
    );
  }
}

export default Comment;
