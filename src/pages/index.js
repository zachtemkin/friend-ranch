import React from "react";
import styled, { keyframes } from "styled-components";
import FR from "../images/FR-Logo.svg";

const pageStyles = {
  backgroundColor: "#FFFDF6",
  width: "100vw",
  height: "100vh",
};

const IndexPage = () => {
  const x = keyframes`
    0% {
      left: 0;
    }
    100% {
      left: 100%;
      margin-left: -400px;
    }
  `;

  const y = keyframes`
    0% {
      top: 0;
    }
    100% {
      top: 100%;
      margin-top: -150px;
    }
  `;

  const LogoThing = styled.img`
    position: fixed;
    width: 400px;
    height: 150px;
    animation: 4s linear 0s infinite alternate none running ${x},
      5.5s linear 0s infinite alternate none running ${y};
  `;

  return (
    <main style={pageStyles}>
      <LogoThing src={FR} alt='Friend Ranch' />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
