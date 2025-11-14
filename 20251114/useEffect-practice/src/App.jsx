import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <ScrollIndicator />
      <MouseFollower />
      <button
        type="button"
        onClick={() => console.log(1)}
        style={{ cursor: "pointer" }}
      >
        123
      </button>
      <div style={{ height: "200vh" }}></div>
    </>
  );
}
const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "blue",
        pointerEvents: "none",
      }}
    ></div>
  );
};

const ScrollIndicator = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const winodwHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / winodwHeight) * 100;
      setScrollWidth(scrollPercent);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${scrollWidth}%`,
        height: "10px",
        backgroundColor: "blue",
      }}
    ></div>
  );
};

export default App;
