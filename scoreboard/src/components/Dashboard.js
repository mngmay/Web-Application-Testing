import React, { useState } from "react";
import { Display } from "./Display";

export const Dashboard = () => {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const strikeHandler = () => {
    if (strikes >= 0) {
      strikes < 2 ? setStrikes(strikes + 1) : setStrikes(0);
    }
  };

  const ballHandler = () => {
    if (balls >= 0) {
      balls < 3 ? setBalls(balls + 1) : setBalls(0);
    }
  };

  const foulHandler = () => {
    if (strikes >= 0) {
      strikes < 2 && setStrikes(strikes + 1);
    }
  };

  const hitHandler = () => {
    setStrikes(0);
    setBalls(0);
  };

  return (
    <div className="dashboard">
      <Display balls={balls} strikes={strikes} />
      <button data-testid="strikeBtn" onClick={strikeHandler}>
        Strike
      </button>
      <button data-testid="ballBtn" onClick={ballHandler}>
        Ball
      </button>
      <button data-testid="foulBtn" onClick={foulHandler}>
        Foul
      </button>
      <button data-testid="hitBtn" onClick={hitHandler}>
        Hit
      </button>
    </div>
  );
};
