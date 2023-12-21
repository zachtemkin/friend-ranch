import React, { useState, useRef, useEffect } from "react";
import FR from "../images/FR-Logo.svg";

const pageStyles = {
  backgroundColor: "#FFFDF6",
  width: "100vw",
  height: "100vh",
};

const IndexPage = () => {
  //initial logo pos and refresh speed
  const cycleSpeed = 42;
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [speed, setSpeed] = useState({ x: 10, y: 10 });

  //initial logo width & height
  const logoRef = useRef(null);
  const [logoWidth, setLogoWidth] = useState(0);
  const [logoHeight, setLogoHeight] = useState(0);

  useEffect(() => {
    if (logoRef.current) {
      const { width, height } = logoRef.current.getBoundingClientRect();
      setLogoWidth(width);
      setLogoHeight(height);
    }
  }, [logoWidth, logoHeight]);

  //initial page width & height
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  //check hits
  const checkHit = () => {
    if (pos.x + logoWidth >= windowWidth || pos.x <= 0) {
      setSpeed({ x: (speed.x *= -1), y: speed.y });
    }

    if (pos.y + logoHeight >= windowHeight || pos.y <= 0) {
      setSpeed({ x: speed.x, y: (speed.y *= -1) });
    }
  };

  //update position
  useEffect(() => {
    const updateInterval = setInterval(() => {
      setPos((prevPos) => ({
        x: (prevPos.x += speed.x),
        y: (prevPos.y += speed.y),
      }));
      checkHit();
    }, cycleSpeed);

    return () => clearInterval(updateInterval);
  }, [pos, speed]);

  return (
    <main style={pageStyles}>
      <img
        ref={logoRef}
        src={FR}
        style={{
          position: "fixed",
          animation:
            "4s linear 0s infinite alternate none running x, 5.5s linear 0s infinite alternate none running y",
          transform: `translate(${pos.x}px, ${pos.y}px)`,
        }}
        alt='Friend Ranch'
      />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
