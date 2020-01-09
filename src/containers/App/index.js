import React from "react";

import Header from "../Header";
import Posts from "../Posts";

function App() {
  return (
    <>
      <Header />
      <div style={{ width: "80%", margin: "0px 10%" }}>
        <Posts />
      </div>
    </>
  );
}

export default App;
