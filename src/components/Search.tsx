import Header from './Header';
import { CityProps } from '../types/index';
import SearchIcon from './Icons/SearchIcon';
import ResetIcon from './Icons/ResetIcon';

interface SearchProps {
  city: string;
  listOfCities: [];
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectedCity: (city: CityProps) => void;
  handleReset: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Search({
  city,
  listOfCities,
  handleInputChange,
  handleSelectedCity,
  handleReset,
}: SearchProps) {
  return (
    <section className="dark:bg-neutral-800 w-full md:w-full flex flex-col text-center items-center justify-center h-full lg:p-24 ">
      <>
        <Header />
      </>
      <section
        className="relative flex mt-5 md:mt-4 space-x-2"
        onSubmit={(e) => e.preventDefault()}
      >
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
        {city && (
          <button
            className="absolute top-2 right-2 w-6 h-6 stroke-neutral-400 hover:stroke-neutral-600"
            onClick={handleReset}
          >
            <ResetIcon />
          </button>
        )}

        <ul className="absolute mt-10 text-left">
          {listOfCities.map((city: CityProps, index: number) => (
            <li key={`${city.name}-${index}`}>
              <button
                className="dark:text-neutral-200 dark:hover:font-semibold rounded-md p-2 pl-7 mt-2 space-y-1 font-normal text-neutral-900 hover:font-bold hover:text-neutral-800 focus:text-neutral-800"
                onClick={() => {
                  handleSelectedCity(city);
                }}
              >
                {`${city.name}, ${city.country}`}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default Search;
