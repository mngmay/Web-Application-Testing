import React from "react";

export const Display = ({ balls, strikes }) => {
  return (
    <div className="display">
      <div className="balls">
        Balls: <span data-testid="balls">{balls}</span>
      </div>
      <div className="strikes">
        Strikes: <span data-testid="strikes">{strikes}</span>
      </div>
    </div>
  );
};
