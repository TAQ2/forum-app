import React from "react";

class AddComment extends React.Component {
  render() {
    return (
      <div style={{ border: "1px solid darkgray", padding: 8 }}>
        <strong>Add a comment</strong>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 20 }}>
            <span>Title</span>
            <input />
          </div>
          <div />
          <div>
            <span>Email Address</span>
            <input />
          </div>
        </div>
        <textarea style={{ width: "100%" }} rows={3} />
      </div>
    );
  }
}

export default AddComment;
