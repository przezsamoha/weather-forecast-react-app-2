import { SearchProps, CityProps } from '../types';

type SearchListOfCitiesType = Omit<
  SearchProps,
  'city' | 'handleInputChange' | 'handleReset'
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
    </div>
  );
}
