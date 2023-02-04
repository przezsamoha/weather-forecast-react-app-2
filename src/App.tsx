import useForecast from './hooks/useForecast';
import Search from './components/Search';
import Forecast from './components/Forecast';

function App() {
  const {
    city,
    listOfCities,
    forecast,
    handleInputChange,
    handleResetButton,
    handleSelectedCity,
  } = useForecast();

  return (
    <div className="flex justify-center items-center h-[100vh] w-full">
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <Search
          city={city}
          listOfCities={listOfCities}
          handleInputChange={handleInputChange}
          handleSelectedCity={handleSelectedCity}
          handleResetButton={handleResetButton}
        />
      )}
    </div>
  );
}

export default App;
