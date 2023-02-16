import { SearchProps } from "../types/index";

import SearchHeader from "./SearchHeader";
import SearchInput from "./SearchInput";
import SearchListOfCities from "./SearchListOfCities";

export default function Search({
  city,
  listOfCities,
  handleInputChange,
  handleSelectedCity,
  handleReset,
}: SearchProps) {
  return (
    <section className="w-full md:w-full flex flex-col text-center items-center justify-center h-full lg:p-24 dark:bg-neutral-800">
      <SearchHeader />
      <div
        className="relative flex mt-5 md:mt-4 space-x-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <SearchInput
          city={city}
          handleInputChange={handleInputChange}
          handleReset={handleReset}
        />

        <SearchListOfCities
          listOfCities={listOfCities}
          handleSelectedCity={handleSelectedCity}
        />
      </div>
    </section>
  );
}
