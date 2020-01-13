import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import { addComment } from "../../actions/comments";
import Card from "../components/Card";
import Button from "../components/Button";
import { screenBreakpoints } from "../../theme";

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
    dispatch: PropTypes.func.isRequired,
    screenWidth: PropTypes.number.isRequired
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
    const { name, email, body } = this.state;

    if (name === "" || email === "" || body === "") {
      return;
    }

    dispatch(addComment(postId, { name, email, body }));
    this.setState({
      name: "",
      email: "",
      body: ""
    });
  };

  render() {
    const { name, email, body, isDisplayingForm } = this.state;
    const { screenWidth } = this.props;

    if (!isDisplayingForm) {
      return (
        <Card>
          <div style={{ display: "flex" }}>
            <Button
              style={{
                marginBottom: 10
              }}
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
        <div
          style={{
            display: "flex",
            marginBottom: 10,
            flexDirection: screenWidth < screenBreakpoints.small && "column"
          }}
        >
          <Input
            style={{
              marginRight: 20,
              width: screenWidth < screenBreakpoints.small ? "100%" : "35%",
              marginBottom: screenWidth < screenBreakpoints.small && 10
            }}
            value={name}
            onChange={this.handleInputChange}
            name="name"
            placeholder="Title..."
          />
          <Input
            style={{
              width: screenWidth < screenBreakpoints.small ? "100%" : "35%"
            }}
            value={email}
            onChange={this.handleInputChange}
            name="email"
            placeholder="Email..."
          />
          {screenWidth >= screenBreakpoints.small && (
            <Button
              style={{
                marginLeft: "auto"
              }}
              isDisabled={name === "" || email === "" || body === ""}
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          )}
        </div>
        <textarea
          style={{
            width: "100%",
            border: "none",
            backgroundColor: "#efefef",
            borderRadius: "5px",
            resize: "none",
            padding: "5px 10px",
            marginBottom: 10
          }}
          rows={3}
          name="body"
          value={body}
          onChange={this.handleInputChange}
          placeholder="Add a comment..."
        />
        {screenWidth < screenBreakpoints.small && (
          <div
            style={{
              display: "flex"
            }}
          >
            <Button
              isDisabled={name === "" || email === "" || body === ""}
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </div>
        )}
      </Card>
    );
  }
}

export default connect(state => ({
  screenWidth: state.userMetrics.screenWidth
}))(AddComment);
