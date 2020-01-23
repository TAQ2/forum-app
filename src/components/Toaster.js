import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose, MdForum } from "react-icons/md";
import { colours, screenBreakpoints } from "../theme";

const Container = styled(animated.div)`
  background-color: ${colours.primary};
  position: fixed;
  cursor: default;
  border-radius: 5px;
  padding: 15px 25px;
  border: 2px solid #eee;
  bottom: 10px;
  right: 10px;
  width: 500px;

  @media (max-width: ${screenBreakpoints.tablet}px) {
    right: 2%;
    width: 96%;
    bottom: 4%;
  }
`;

export default function Toaster({ children }) {
  const [isClosed, setIsClosed] = useState(false);

  const animation = useSpring({
    transform: "translateX(0px)",
    opacity: isClosed ? 0 : 1,
    from: { transform: "translateX(50px)", opacity: 0 }
  });

  return (
    <Container style={animation}>
      <div
        style={{
          position: "absolute",
          right: 5,
          top: 5,
          cursor: "pointer"
        }}
      >
        <MdClose
          onClick={() => {
            setIsClosed(true);
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <div style={{ marginRight: 20 }}>
          <MdForum size={40} color="purple" />
        </div>
        <span>{children}</span>
      </div>
    </Container>
  );
}
