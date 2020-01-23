import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Card from "../../components/Card";
import { screenBreakpoints } from "../../theme";

class Comment extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    screenWidth: PropTypes.number.isRequired
  };

  render() {
    const { name, body, email, screenWidth } = this.props;

    return (
      <Card>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 10,
            flexDirection: screenWidth <= screenBreakpoints.small && "column"
          }}
        >
          <strong
            style={{
              marginBottom: screenWidth <= screenBreakpoints.small && 10
            }}
          >
            {name}
          </strong>
          <a href={"mailto:" + email}>{email}</a>
        </div>
        <div>{body}</div>
      </Card>
    );
  }
}

export default connect(state => ({
  screenWidth: state.userMetrics.screenWidth
}))(Comment);
