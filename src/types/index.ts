export interface SearchProps {
  city: string;
  listOfCities: [];
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectedCity: (city: CityProps) => void;
  handleReset: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface CityProps {
  name: string;
  country: string;
  lon: number;
  lat: number;
}

export interface DegreeProps {
  temp: number;
}

interface WeatherProps {
  description: string;
  icon: string;
  main: string;
}

export interface ForecastListElementProps {
  dt: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: WeatherProps[];
  wind: {
    speed: number;
    gust: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  pop: number;
  visibility: number;
}

export interface ForecastDataProps {
  name: string;
  country: string;
  timezone: number;

  sunrise: number;
  sunset: number;

  list: ForecastListElementProps[];
}
