import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addComment } from "../../actions/comments";

class AddComment extends React.Component {
  static propTypes = {
    postId: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  state = {
    name: "",
    email: "",
    body: ""
  };

  handleInputChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = () => {
    const { dispatch, postId } = this.props;

    dispatch(addComment(postId, this.state));
  };

  render() {
    const { name, email, body } = this.state;

    return (
      <div style={{ border: "1px solid darkgray", padding: 8 }}>
        <strong>Add a comment</strong>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 20 }}>
            <span>Title</span>
            <input value={name} onChange={this.handleInputChange} name="name" />
          </div>
          <div />
          <div>
            <span>Email Address</span>
            <input
              value={email}
              onChange={this.handleInputChange}
              name="email"
            />
          </div>
        </div>
        <textarea
          style={{ width: "100%" }}
          rows={3}
          name="body"
          value={body}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default connect()(AddComment);
