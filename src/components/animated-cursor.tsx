"use client";
import React, { useState, useEffect } from "react";

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Track the mouse position
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Styling for the cursor
  const cursorStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    zIndex: 9999, // Ensure it appears above all elements
  };

  return (
    <>
      {/* Hide the default cursor */}
      <style jsx global>{`
        body {
          cursor: none;
        }
      `}</style>

      {/* Custom cursor */}
      <div
        className="fixed w-10 h-10 rounded-full pointer-events-none  transition-transform duration-200 ease-out"
        style={{
          ...cursorStyle,
          transform: `translate(-50%, -50%)`,
          background: "radial-gradient(circle,  #d1c4fc, #f093fb)",
          boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
        }}
      />
    </>
  );
};

export default AnimatedCursor;
