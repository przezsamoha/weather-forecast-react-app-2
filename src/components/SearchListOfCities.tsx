import { SearchProps, CityProps } from "../types";

type SearchListOfCitiesType = Omit<
  SearchProps,
  "city" | "handleInputChange" | "handleReset"
>;

export default function SearchListOfCities({
  listOfCities,
  handleSelectedCity,
}: SearchListOfCitiesType) {
  return (
    <div className="absolute mt-10 text-left">
      <ul>
        {listOfCities.map((city: CityProps, index: number) => (
          <li key={`${city.name}-${index}`}>
            <button
              type="button"
              className="rounded-md p-1 pl-7 mt-2 text-base font-medium text-neutral-500 hover:text-neutral-900 focus:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100"
              onClick={() => {
                handleSelectedCity(city);
              }}
            >
              {`${city.name}, ${city.country}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
