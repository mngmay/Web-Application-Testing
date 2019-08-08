import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import { Dashboard } from "../components/Dashboard";

describe("<Dashboard />", () => {
  it("should render buttons", () => {
    const dashboard = render(<Dashboard />);
    expect(dashboard.getByText(/strike/i));
    expect(dashboard.getByText(/ball/i));
    expect(dashboard.getByText(/foul/i));
    expect(dashboard.getByText(/hit/i));
  });
});
