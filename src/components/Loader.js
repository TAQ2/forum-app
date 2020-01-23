import React from "react";
import styled from "styled-components";

import { animated } from "react-spring";

// @Cleanup - use react spring rather than css for consistency
const L = styled(animated.div)`
  border: 1em solid rgba(255, 255, 255, 0.2);
  border-left: 1em solid;
  animation: spin 1.5s linear infinite;
  border-radius: 50%;
  width: 8em;
  height: 8em;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default () => {
  const [showLoader, setShowLoader] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(true);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [showLoader]);

  if (!showLoader) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "2em"
      }}
    >
      <L />
    </div>
  );
};
