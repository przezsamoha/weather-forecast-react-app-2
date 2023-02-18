import { ForecastListElementProps } from "../types";
import { ForecastTileProps } from "../components/ForecastTile";
import Degree from "../components/Degree";

export function formatTimestampToGetHoursAndMinutes(timestamp: number) {
  const date = new Date(timestamp * 1000);
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();

  if (hours.length <= 1) hours = `0${hours}`;
  if (minutes.length <= 1) minutes = `0${minutes}`;

  return `${hours}:${minutes}`;
}

export function formatTimestampToGetHours(timestamp: number) {
  const date = new Date(timestamp * 1000);
  let hours = date.getHours().toString();

  if (hours.length <= 1) hours = `0${hours}`;

  return `${hours}`;
}

export function getHumidityDescription(level: number) {
  switch (true) {
    case level <= 55:
      return "Dry and comfortable.";
      break;
    case level > 55 && level < 65:
      return `Slightly uncomfortable.`;
      break;
    case level >= 65:
      return "Lots of moisture, uncomfortable.";
      break;
    default:
      break;
  }
}

export function getPrecipitationDescription(pop: number) {
  switch (true) {
    case pop < 0.2:
      return "No chance, ";
      break;
    case pop >= 0.2 && pop < 0.3:
      return "Slight chance, ";
      break;
    case pop >= 0.3 && pop < 0.6:
      return "A chance, ";
      break;
    case pop >= 0.6 && pop < 0.7:
      return "Likely, ";
      break;
    case pop >= 0.7:
      return "Most likely, ";
    default:
      break;
  }
}

export function getPressureDescription(pressure: number) {
  const standardPressureValue = 1013;

  return pressure > standardPressureValue ? "High pressure." : "Low pressure.";
}

export function getVisibilityDesctiption(distanceInMeters: number) {
  switch (true) {
    case distanceInMeters <= 1000:
      return "Very poor visibility.";
    case distanceInMeters > 1000 && distanceInMeters <= 4000:
      return "Poor visibility.";
    case distanceInMeters > 4000 && distanceInMeters <= 10000:
      return "Medium visibility.";
    case distanceInMeters > 10000 && distanceInMeters <= 20000:
      return "Good visibility.";
    case distanceInMeters > 20000 && distanceInMeters <= 40000:
      return "Very good visibility.";
    case distanceInMeters > 40000:
      return "Great visibility.";
    default:
      break;
  }
}

export function getWindDirection(degree: number) {
  switch (true) {
    case degree === 360:
      return "N";
    case degree === 90:
      return "E";
    case degree === 180:
      return "S";
    case degree === 270:
      return "W";
    case degree > 0 && degree < 90:
      return "NE";
    case degree > 90 && degree < 180:
      return "SE";
    case degree > 180 && degree < 270:
      return "SW";
    case degree > 270 && degree < 360:
      return "NW";
    default:
      break;
  }
}

export function getSubjectiveTemp(feelsLike: number, temp: number) {
  return feelsLike < temp ? "Feels colder." : "Feels warmer.";
}

export function getTilesBlueprint(
  today: ForecastListElementProps
): ForecastTileProps[] {
  return [
    {
      icon: "feels",
      title: "feels like",
      info: <Degree temp={Math.floor(today.main.feels_like)} />,
      description: getSubjectiveTemp(today.main.feels_like, today.main.temp),
    },
    {
      icon: "wind",
      title: "wind",
      info: `${Math.round(today.wind.speed)} km/h ${getWindDirection(
        today.wind.deg
      )}`,
      description: `Gust ${today.wind.gust.toFixed(1)} km/h.`,
    },
    {
      icon: "visibility",
      title: "visibility",
      info: `${today.visibility / 1000} km`,
      description: `${getVisibilityDesctiption(today.visibility)}`,
    },
    {
      icon: "pressure",
      title: "pressure",
      info: `${today.main.pressure} hPa`,
      description: `${getPressureDescription(today.main.pressure)}`,
    },
    {
      icon: "humidity",
      title: "humidity",
      info: `${today.main.humidity}%`,
      description: `${getHumidityDescription(today.main.humidity)}`,
    },

    {
      icon: "precipitation",
      title: "precipitation",
      info: `${Math.round(today.pop * 100)}%`,
      description: `${getPrecipitationDescription(today.pop)} clouds at ${
        today.clouds.all
      }%.`,
    },
  ];
}
