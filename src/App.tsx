import { useState } from 'react';

import useForecast from './hooks/useForecast';
import Search from './components/Search';
import Forecast from './components/Forecast';
import ToggleDarkMode from './components/ToggleDarkMode';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const {
    city,
    listOfCities,
    forecast,
    handleInputChange,
    handleSelectedCity,
    handleReset,
  } = useForecast();

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`${
        darkMode ? 'dark' : 'light'
      } dark:bg-neutral-800 flex justify-center items-center h-screen w-full`}
    >
      <ToggleDarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <Search
          city={city}
          listOfCities={listOfCities}
          handleInputChange={handleInputChange}
          handleSelectedCity={handleSelectedCity}
          handleReset={handleReset}
        />
      )}
    </div>
  );
}

export default App;
