import { useState, useEffect } from 'react';
import { CityProps, ForecastProps } from '../types/index';

function useForecast() {
  const [city, setCity] = useState<string>('');
  const [listOfCities, setlistOfCities] = useState<[]>([]);
  const [selectedCity, setSelectedCity] = useState<CityProps | null>(null);
  const [forecast, setForecast] = useState<ForecastProps | null>(null);

  const URL = 'http://api.openweathermap.org';

  function getListOfCities(data: string) {
    const limit = 6;
    fetch(
      `${URL}/geo/1.0/direct?q=${data.trim()}&limit=${limit}&appid=${
        import.meta.env.VITE_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setlistOfCities(data))
      .catch((e) => console.log(e));
  }

  function getForecast(data: CityProps) {
    fetch(
      //remember to update the below API from /weather?/ to /forecast?/ to get the forecast instead of the current weather

      `${URL}/data/2.5/forecast?lat=${data.lat}&lon=${
        data.lon
      }&units=metric&appid=${import.meta.env.VITE_APP_API_KEY}`
    )
      .then((res) => res.json())
      // API returns a list of forecast every 3 hours, hence the below trim to about 16 elements
      .then((data) => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 16),
        };
        setForecast(forecastData);
      })
      .catch((e) => console.log(e));
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setCity(value);

    if (value !== '') {
      getListOfCities(value);
    }
  }

  function handleSelectedCity(city: CityProps) {
    setSelectedCity(city);
    getForecast(city);
  }

  useEffect(() => {
    if (selectedCity) {
      setCity(selectedCity.name);
      setlistOfCities([]);
    }
  }, [selectedCity]);

  function handleReset() {
    setCity('');
    setlistOfCities([]);
    setForecast(null);
    setSelectedCity(null);
  }

  return {
    city,
    listOfCities,
    forecast,
    handleInputChange,
    handleReset,
    handleSelectedCity,
  };
}

export default useForecast;
