import { SearchProps } from "../types";

import SearchIcon from "./Icons/SearchIcon";

type SeachInputType = Omit<
  SearchProps,
  "listOfCities" | "handleSelectedCity" | "handleReset"
>;

export default function SearchInput({
  city,
  handleInputChange,
}: SeachInputType) {
  return (
    <div className="relative block">
      <span className="absolute inset-y-0 ml-2 flex items-center pl-2  fill-neutral-400 dark:fill-neutral-400">
        <SearchIcon />
      </span>
      <input
        className="dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:border-none dark:focus:ring-none w-full dark:placeholder:text-neutral-400 placeholder:text-neutral-400 text-md text-neutral-600  border border-neutral-300 hover:border-neutral-400 rounded-md py-2 pl-9 pr-20 focus:text-neutral-600 cursor-pointer"
        placeholder="Search for the city..."
        type="text"
        name="search"
        value={city}
        onChange={handleInputChange}
      />
    </div>
  );
}
