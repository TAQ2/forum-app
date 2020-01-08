import React from "react";
import Posts from "../Posts";

class App extends React.Component {
  render() {
    return (
      <div style={{ width: "80%", margin: "0px 10%" }}>
        <Posts />
      </div>
    );
  }
}

export default App;
