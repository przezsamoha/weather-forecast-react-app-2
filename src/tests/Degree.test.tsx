import { render, screen } from "@testing-library/react";
import Degree from "../components/Degree";

describe("Degree", () => {
  it("should render 16 degree value", () => {
    const expectedTemp = 16;
    render(<Degree temp={expectedTemp} />);

    expect(screen.getByTestId("degree")).toHaveTextContent(
      expectedTemp.toString()
    );
  });

  it("should render 25 degree value", () => {
    const expectedTemp = 25;
    render(<Degree temp={expectedTemp} />);

    expect(screen.getByTestId("degree")).toHaveTextContent(
      expectedTemp.toString()
    );
  });
});
