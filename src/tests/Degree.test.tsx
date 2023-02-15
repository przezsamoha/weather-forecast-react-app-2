import { render, screen } from "@testing-library/react";

import Degree from "../components/Degree";

describe("Degree", () => {
  it("should render Degree component", () => {
    render(<Degree temp={0} />);
    screen.debug();
  });
});
