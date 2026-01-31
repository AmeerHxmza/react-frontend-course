import { useRef } from "react";

const Index = () => {
  const bgRef = useRef(null);

  const changeBg = () => {
    const colors = [
      "#FFB703",
      "#FF6F91",
      "#845EC2",
      "#00C9A7",
      "#4D96FF",
      "#FFC75F",
      "#F9F871",
      "#2C2C54",
      "#1B1B1B",
      "#E36414",
    ];

    bgRef.current.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  };
  console.log("Re-rendring");

  return (
    <div
      ref={bgRef}
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={changeBg}
        style={{
          padding: "12px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Change Background
      </button>
    </div>
  );
};

export default Index;
