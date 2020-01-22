import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import Card from "../components/Card";
import Button from "../components/Button";
import { addComment } from "../../actions/comments";
import { screenBreakpoints } from "../../theme";

const Input = styled.input`
  @media (max-width: ${screenBreakpoints.tablet}px) {
    width: 100%;
  }

  width: 35%
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
    title: "",
    email: "",
    body: "",
    isDisplayingForm: false
  };

  handleInputChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = () => {
    const { dispatch, postId } = this.props;
    const { title, email, body } = this.state;

    if (title === "" || email === "" || body === "") {
      return;
    }

    dispatch(addComment(postId, { name: title, email, body }));
    this.setState({
      title: "",
      email: "",
      body: ""
    });
  };

  render() {
    const { title, email, body, isDisplayingForm } = this.state;
    const { screenWidth } = this.props;

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

    const submitIsDisabled = title === "" || email === "" || body === "";
    const isSmallScreen = screenWidth < screenBreakpoints.small;

    return (
      <Card>
        <div
          style={{
            display: "flex",
            marginBottom: 10,
            flexDirection: isSmallScreen && "column" // @Incomplete - use media queries
          }}
        >
          <Input
            style={{
              marginRight: 20,
              marginBottom: isSmallScreen && 10 // @Incomplete - use media queries
            }}
            value={title}
            onChange={this.handleInputChange}
            name="title"
            placeholder="Title..."
          />
          <Input
            value={email}
            onChange={this.handleInputChange}
            name="email"
            placeholder="Email..."
          />
          {!isSmallScreen && (
            <Button
              style={{
                marginLeft: "auto"
              }}
              isDisabled={submitIsDisabled}
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
        {isSmallScreen && (
          <div
            style={{
              display: "flex"
            }}
          >
            <Button isDisabled={submitIsDisabled} onClick={this.handleSubmit}>
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
