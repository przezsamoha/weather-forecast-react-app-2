import { useState } from "react";

import useForecast from "./hooks/useForecast";
import Search from "./components/Search";
import Forecast from "./components/Forecast";
import ToggleDarkMode from "./components/ToggleDarkMode";
import ReturnToSearch from "./components/ReturnToSearch";
// import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const {
    city,
    lat,
    lon,
    listOfCities,
    forecast,
    handleInputChange,
    handleSelectedCity,
    handleReset,
  } = useForecast();

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="relative w-full h-screen min-w-[350px] dark:bg-neutral-900">
      <div className={`${darkMode ? "dark" : "light"}`}>
        {forecast && <ReturnToSearch handleReset={handleReset} />}
        <ToggleDarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        {forecast ? (
          <Forecast
            darkMode={darkMode}
            forecastData={forecast}
            lat={lat}
            lon={lon}
          />
        ) : (
          <Search
            city={city}
            listOfCities={listOfCities}
            handleInputChange={handleInputChange}
            handleSelectedCity={handleSelectedCity}
            handleReset={handleReset}
          />
        )}
        {/* <Footer darkMode={darkMode} /> */}
      </div>
    </div>
  );
}

export default App;
