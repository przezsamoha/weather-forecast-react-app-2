import { render } from "@testing-library/react";
import SearchHeader from "../components/SearchHeader";

describe("SearchHeader", () => {
  it("should render a section with two elements: h1 heading 'Weather Forecast' and h2 heading 'React/Typescript/Vite App'", () => {
    render(<SearchHeader />);
  });
});
