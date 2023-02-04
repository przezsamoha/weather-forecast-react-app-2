import { ChangeEvent } from 'react';
import Header from './Header';
import { CityProps, ForecastProps } from '../types/index';

interface SearchProps {
  city: string;
  listOfCities: [];
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectedCity: (city: CityProps) => void;
  handleResetButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Search({
  city,
  listOfCities,
  handleInputChange,
  handleSelectedCity,
  handleResetButton,
}: SearchProps) {
  return (
    <section className="w-full md:max-w-[700px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[700px] ">
      <Header />
      <form
        className="relative flex mt-10 md:mt-4 space-x-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="relative block">
          <span className="absolute inset-y-0 ml-2 flex items-center pl-2">
            <svg
              className="w-4 h-4 fill-slate-400"
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
            className="w-full placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 focus:outline-none sm:text-md "
            placeholder="Search for the city..."
            type="text"
            name="search"
            value={city}
            onChange={handleInputChange}
          />
        </label>

        {city && (
          <button onClick={handleResetButton}>
            <span className="absolute inset-y-0 flex items-center pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-slate-300"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
        )}
        <ul className="absolute mt-10 text-left">
          {listOfCities.map((city: CityProps, index: number) => (
            <li key={`${city.name}-${index}`}>
              <button
                className="rounded-md p-2 mt-2 space-y-1 hover:bg-slate-100"
                onClick={() => {
                  handleSelectedCity(city);
                }}
              >
                {`${city.name}, ${city.country}`}
              </button>
            </li>
          ))}
        </ul>
      </form>
    </section>
  );
}

export default Search;
