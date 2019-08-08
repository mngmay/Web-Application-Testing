import React, { useState } from "react";

export const Display = () => {
  return (
    <div className="display">
      <div className="balls">
        Balls: <span data-testid="balls">2</span>
      </div>
      <div className="strikes">Strikes</div>
    </div>
  );
};
