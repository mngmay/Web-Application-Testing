import React from "react";
import { render, fireEvent } from "@testing-library/react";
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

  it("should increment strikes by 1 when strike is clicked", () => {
    const dashboard = render(<Dashboard />);
    const strikeCount = dashboard.getByTestId("strikes");
    const strike = dashboard.getByTestId("strikeBtn");
    expect(strikeCount.textContent).toBe("0");
    fireEvent.click(strike);
    expect(strikeCount.textContent).toBe("1");
  });

  it("should increment strikes by 1 when foul is clicked", () => {
    const dashboard = render(<Dashboard />);
    const strikeCount = dashboard.getByTestId("strikes");
    const foul = dashboard.getByTestId("foulBtn");
    expect(strikeCount.textContent).toBe("0");
    fireEvent.click(foul);
    expect(strikeCount.textContent).toBe("1");
  });

  it("should increment balls by 1 when balls is clicked", () => {
    const dashboard = render(<Dashboard />);
    const ballCount = dashboard.getByTestId("balls");
    const ball = dashboard.getByTestId("ballBtn");
    expect(ballCount.textContent).toBe("0");
    fireEvent.click(ball);
    expect(ballCount.textContent).toBe("1");
  });

  it("if strikes is at 2, clicking foul should not increment", () => {
    const dashboard = render(<Dashboard />);
    const strikeCount = dashboard.getByTestId("strikes");
    const foul = dashboard.getByTestId("foulBtn");
    expect(strikeCount.textContent).toBe("0");
    fireEvent.click(foul);
    expect(strikeCount.textContent).toBe("1");
    fireEvent.click(foul);
    expect(strikeCount.textContent).toBe("2");
    fireEvent.click(foul);
    expect(strikeCount.textContent).toBe("2");
  });

  it("should reset balls to 0 when a balls is at 3 and is clicked", () => {
    const dashboard = render(<Dashboard />);
    const ballCount = dashboard.getByTestId("balls");
    const ball = dashboard.getByTestId("ballBtn");
    expect(ballCount.textContent).toBe("0");
    fireEvent.click(ball);
    expect(ballCount.textContent).toBe("1");
    fireEvent.click(ball);
    expect(ballCount.textContent).toBe("2");
    fireEvent.click(ball);
    expect(ballCount.textContent).toBe("3");
    fireEvent.click(ball);
    expect(ballCount.textContent).toBe("0");
  });

  it("should reset strikes to 0 when a strikes is at 2 and is clicked", () => {
    const dashboard = render(<Dashboard />);
    const strikeCount = dashboard.getByTestId("strikes");
    const strike = dashboard.getByTestId("strikeBtn");
    expect(strikeCount.textContent).toBe("0");
    fireEvent.click(strike);
    expect(strikeCount.textContent).toBe("1");
    fireEvent.click(strike);
    expect(strikeCount.textContent).toBe("2");
    fireEvent.click(strike);
    expect(strikeCount.textContent).toBe("0");
  });

  it("should reset strikes and balls to 0 when clicked", () => {
    const dashboard = render(<Dashboard />);
    const strikeCount = dashboard.getByTestId("strikes");
    const ballCount = dashboard.getByTestId("balls");
    const hit = dashboard.getByTestId("hitBtn");
    fireEvent.click(hit);
    expect(strikeCount.textContent).toBe("0");
    expect(ballCount.textContent).toBe("0");
  });
});
