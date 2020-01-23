import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Card from "../../components/Card";
import { screenBreakpoints } from "../../theme";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media (max-width: ${screenBreakpoints.small}px) {
    flex-direction: column;
  }
`;

const Name = styled.strong`
  @media (max-width: ${screenBreakpoints.small}px) {
    margin-bottom: 10px;
  }
`;

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
        <Container>
          <Name>{name}</Name>
          <a href={"mailto:" + email}>{email}</a>
        </Container>
        <div>{body}</div>
      </Card>
    );
  }
}

export default Comment;
