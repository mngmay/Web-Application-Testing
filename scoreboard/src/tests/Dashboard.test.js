import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import { Dashboard } from "../components/Dashboard";

describe("<Dashboard />", () => {
  it("strike button text should say Strike", () => {
    const dashboard = render(<Dashboard />);
    const strike = dashboard.queryByTestId("strikeBtn").innerHTML;
    const strikeText = text => {
      return text === "Strike";
    };
    expect(strikeText(strike)).toBe(true);
  });

  it("ball button text should say Ball", () => {
    const dashboard = render(<Dashboard />);
    const ball = dashboard.queryByTestId("ballBtn").innerHTML;
    const ballText = text => {
      return text === "Ball";
    };
    expect(ballText(ball)).toBe(true);
  });

  it("foul button text should say Foul", () => {
    const dashboard = render(<Dashboard />);
    const foul = dashboard.queryByTestId("foulBtn").innerHTML;
    const foulText = text => {
      return text === "Foul";
    };
    expect(foulText(foul)).toBe(true);
  });

  it("hit button text should say Hit", () => {
    const dashboard = render(<Dashboard />);
    const hit = dashboard.queryByTestId("hitBtn").innerHTML;
    const hitText = text => {
      return text === "Hit";
    };
    expect(hitText(hit)).toBe(true);
  });

  it("should increment strikes by 1 when strike is clicked", () => {});

  it("should increment strikes by 1 when foul is clicked", () => {});

  it("should increment balls by 1 when balls is clicked", () => {});

  it("if strikes is at 2, clicking foul should not increment", () => {});

  it("should increment reset balls and strikes to 0 when a balls is at 3 and is clicked", () => {});

  it("should increment reset balls and strikes to 0 when a strikes is at 2 and is clicked", () => {});
});
