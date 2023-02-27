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
    <section className="relative md:w-full h-screen flex flex-col text-center items-center justify-center dark:bg-neutral-800">
      <SearchHeader />
      <div className="flex mt-5 space-x-2" onSubmit={(e) => e.preventDefault()}>
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
