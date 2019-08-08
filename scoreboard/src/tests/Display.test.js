import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import { Display } from "../components/Display";

describe("<Display />", () => {
  it("should render count of balls for at-bat", () => {
    const display = render(<Display />);
    expect(display.getByText(/strikes/i));
  });
  it("balls should be >= 0", () => {
    const display = render(<Display />);
    const value = parseInt(display.queryByTestId("balls").innerHTML);
    const valueCondition = num => {
      return num >= 0;
    };
    expect(valueCondition(value)).toBe(true);
  });
});

// describe('<AtBat />', () => {
//     it('should render the balls and strikes for the at-bat player', () => {
//         const atBat = render(<Display />);
//         console.log(atBat.queryByTestId('ballsnstrikes').children)
//         const value = parseInt(atBat.getByTestId('ballsnstrikes').innerHTML)
//         const valueConditional = (num) => {
//             return num >= 0;
//         }
//         console.log(value)
//         expect(valueConditional(value)).toBe(true)
//     })
// })
