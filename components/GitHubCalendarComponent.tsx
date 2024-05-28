"use client";

import GitHubCalendar from "react-github-calendar";
import React from "react";
import { text } from "stream/consumers";
import "./styles/style.css";

const GitHubCalendarComponent: React.FC<{ username: string }> = ({
  username,
}) => {
  const customColorScheme = {
    dark: [
      "#161b22",
      "purple",
      "#006d32",
      "#26a641",
      "#39d353",
    ],
  };
  return (
    <div className="github-calender-container">
      <h2>{username}'s GitHub Contributions</h2>
      <GitHubCalendar
        blockMargin={5}
        blockSize={15}
        fontSize={16}
        theme={customColorScheme}
        username={username}
      />
    </div>
  );
};

export default GitHubCalendarComponent;
