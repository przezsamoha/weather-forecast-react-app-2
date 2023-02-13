export interface CityProps {
  name: string;
  country: string;
  lon: number;
  lat: number;
}

export interface DegreeProps {
  temp: number;
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
  weather: [
    {
      description: string;
      icon: string;
      main: string;
    }
  ];
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

  list: Array<ForecastListElementProps>;
}

export interface SuggestionsProps {
  listOfCities: [];
  handleSelectedCity: (city: CityProps) => void;
}
