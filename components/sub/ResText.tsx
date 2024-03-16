"use client";
import React, { useState, useEffect } from "react";

const ResText: React.FC = () => {
  // State to hold the current window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // State to hold the responsive text
  const [resText, setResText] = useState("");

  // Effect hook to update the window width state on window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Effect hook to update the responsive text based on the window width
  useEffect(() => {
    if (windowWidth < 1010) {
      // For smaller screens (e.g., mobile devices)
      setResText("Trusted in");
    } else {
      // For larger screens (e.g., tablets, desktops)
      setResText("Trusted by the most innovative minds in");
    }
  }, [windowWidth]);

  return resText;
};

export default ResText;
