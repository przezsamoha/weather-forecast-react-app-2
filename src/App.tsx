import { useState } from "react";

import useForecast from "./hooks/useForecast";
import Search from "./components/Search";
import Forecast from "./components/Forecast";
import ToggleDarkMode from "./components/ToggleDarkMode";
import ReturnToSearch from "./components/ReturnToSearch";
import Footer from "./components/Footer";

export default function App() {
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
    <div className="min-w-[320px]">
      <div
        className={`${
          darkMode ? "dark" : "light"
        } w-full h-screen flex justify-center items-center dark:bg-neutral-900`}
      >
        {forecast && <ReturnToSearch handleReset={handleReset} />}
        <ToggleDarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        {forecast ? (
          <Forecast forecastData={forecast} />
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
      <Footer darkMode={darkMode} />
    </div>
  );
}
