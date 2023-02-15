import { SearchProps } from "../types/index";

import SearchHeader from "./SearchHeader";
import SearchInput from "./SearchInput";
import SearchListOfCities from "./SearchListOfCities";
import ResetInputValue from "./ResetInputValue";

export default function Search({
  city,
  listOfCities,
  handleInputChange,
  handleSelectedCity,
  handleReset,
}: SearchProps) {
  return (
    <section className="dark:bg-neutral-900 w-full md:w-full flex flex-col text-center items-center justify-center h-full lg:p-24 ">
      <SearchHeader />
      <div
        className="relative flex mt-5 md:mt-4 space-x-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <SearchInput city={city} handleInputChange={handleInputChange} />
        {city && <ResetInputValue handleReset={handleReset} />}

        <SearchListOfCities
          listOfCities={listOfCities}
          handleSelectedCity={handleSelectedCity}
        />
      </div>
    </section>
  );
}
