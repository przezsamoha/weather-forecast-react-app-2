import { render } from "@testing-library/react";
import Search from "../components/Search";
import SearchHeader from "../components/SearchHeader";
import SearchInput from "../components/SearchInput";

describe("Search", () => {
  it("should render a section with two elements: header section (h1 heading 'Weather Forecast' and h2 heading 'React/Typescript/Vite App') and form section", () => {
    render(<SearchHeader />);
    render(<SearchInput />);
  });
});
