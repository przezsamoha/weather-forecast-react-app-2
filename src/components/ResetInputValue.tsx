import { SearchProps } from "../types";

import ResetIcon from "./Icons/ResetIcon";

type ResetInputValueType = Omit<
  SearchProps,
  "city" | "listOfCities" | "handleInputChange" | "handleSelectedCity"
>;

export default function ResetInputValue({ handleReset }: ResetInputValueType) {
  return (
    <div className="">
      <button
        type="reset"
        title="Clear the query"
        className="absolute right-0 top-0 w-6 h-6"
        onClick={handleReset}
      >
        <ResetIcon />
      </button>
    </div>
  );
}
