import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import { addComment } from "../../actions/comments";
import Card from "../components/Card";
import Button from "../components/Button";

const Input = styled.input`
  border: none;
  background-color: #efefef;
  border-radius: 3px;
  font-weight: bold;
  line-height: 2em;
  padding-left: 5px;
`;

class AddComment extends React.Component {
  static propTypes = {
    postId: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  state = {
    name: "", // @Cleanup - name and title
    email: "",
    body: "",
    isDisplayingForm: false
  };

  handleInputChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = () => {
    const { dispatch, postId } = this.props;

    dispatch(addComment(postId, this.state));
    this.setState({
      name: "",
      email: "",
      body: ""
    });
  };

  render() {
    const { name, email, body, isDisplayingForm } = this.state;

    if (!isDisplayingForm) {
      return (
        <Card>
          <div style={{ display: "flex" }}>
            <Button
              style={{ marginBottom: 10 }}
              onClick={() => {
                this.setState({ isDisplayingForm: true });
              }}
            >
              <strong>Add a comment</strong>
            </Button>
          </div>
        </Card>
      );
    }

    return (
      <Card>
        <div style={{ display: "flex", marginBottom: 10 }}>
          <Input
            style={{ marginRight: 20, width: "35%" }}
            value={name}
            onChange={this.handleInputChange}
            name="name"
            placeholder="Title..."
          />

          <Input
            style={{ width: "35%" }}
            value={email}
            onChange={this.handleInputChange}
            name="email"
            placeholder="Email..."
          />
          <Button style={{ marginLeft: "auto" }} onClick={this.handleSubmit}>
            Submit
          </Button>
        </div>
        <textarea
          style={{
            width: "100%",
            border: "none",
            backgroundColor: "#efefef",
            borderRadius: "5px",
            resize: "none",
            padding: "5px 10px"
          }}
          rows={3}
          name="body"
          value={body}
          onChange={this.handleInputChange}
          placeholder="Add a comment..."
        />
      </Card>
    );
  }
}

export default connect()(AddComment);
