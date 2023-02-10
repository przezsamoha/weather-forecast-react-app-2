import Header from './Header';
import { CityProps } from '../types/index';

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
      <Header />
      <section
        className="relative flex mt-5 md:mt-4 space-x-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="relative block">
          <span className="absolute inset-y-0 ml-2 flex items-center pl-2  fill-neutral-400  focus:fill-neutral-600">
            <svg
              className="w-4 h-4 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clipRule="evenodd"
              />
            </svg>
          </span>

          <input
            className="dark:bg-neutral-700 dark:border-none dark:focus-bg-neutral-700 w-full placeholder:text-neutral-400 font-normal text-neutral-400 block border border-neutral-300 rounded-md py-2 pl-9 pr-20 focus:outline-none focus:border-neutral-400 focus:ring-neutral-400 focus:ring-1 focus:text-neutral-400"
            placeholder="Search for the city..."
            type="text"
            name="search"
            value={city}
            onChange={handleInputChange}
          />
        </div>
        {city && (
          <button className="absolute inset-y-0 right-2" onClick={handleReset}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                className="w-6 h-6 stroke-neutral-300  hover:stroke-neutral-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
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
