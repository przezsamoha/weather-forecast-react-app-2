import { SearchProps } from '../types';

import SearchIcon from './Icons/SearchIcon';

type SeachInputType = Omit<
  SearchProps,
  'listOfCities' | 'handleSelectedCity' | 'handleReset'
>;

export default function SearchInput({
  city,
  handleInputChange,
}: SeachInputType) {
  return (
    <div className="relative block">
      <span className="absolute inset-y-0 ml-2 flex items-center pl-2  fill-neutral-500  focus:fill-neutral-600">
        <SearchIcon />
      </span>
      <input
        className="dark:bg-neutral-500 dark:text-neutral-200 dark:border-none dark:focus-bg-neutral-700 w-full placeholder:text-neutral-600 font-normal text-neutral-600 block border border-neutral-600 rounded-md py-2 pl-9 pr-20 focus:outline-none focus:border-neutral-600 focus:ring-neutral-600 focus:ring-1 focus:text-neutral-600"
        placeholder="Search for the city..."
        type="text"
        name="search"
        value={city}
        onChange={handleInputChange}
      />
    </div>
  );
}
