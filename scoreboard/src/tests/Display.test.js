import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import { Dashboard } from "../components/Dashboard";

describe("<Dashboard />", () => {
  it("should render strikes at-bat", () => {
    const display = render(<Dashboard />);
    expect(display.getByText(/strikes/i));
  });

  it("should render balls at-bat", () => {
    const display = render(<Dashboard />);
    expect(display.getByText(/balls/i));
  });

  it("balls should only be 0, 1, 2, 3", () => {
    const display = render(<Dashboard />);
    const value = parseInt(display.queryByTestId("balls").innerHTML);
    const valueCondition = num => {
      return num >= 0 && num < 4;
    };
    expect(valueCondition(value)).toBe(true);
  });

  it("strikes should only be 0, 1, or 2", () => {
    const display = render(<Dashboard />);
    const value = parseInt(display.queryByTestId("strikes").innerHTML);
    const valueCondition = num => {
      return num >= 0 && num < 3;
    };
    expect(valueCondition(value)).toBe(true);
  });
});
