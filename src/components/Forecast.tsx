import { ForecastProps } from '../types';
import Sunrise from './Icons/Sunrise';
import Sunset from './Icons/Sunset';
import Tile, { TileProps } from './Tile';

interface Props {
  data: ForecastProps;
}

interface DegreeProps {
  temp: number;
}

function Degree({ temp }: DegreeProps) {
  return (
    <span>
      {temp}
      <sup>o</sup>
    </span>
  );
}

function getWindDirection(degree: number) {
  switch (true) {
    case degree === 360:
      return 'N';
      break;
    case degree === 90:
      return 'E';
      break;
    case degree === 180:
      return 'S';
      break;
    case degree === 270:
      return 'W';
      break;
    case degree > 0 && degree < 90:
      return 'NE';
      break;
    case degree > 90 && degree < 180:
      return 'SE';
      break;
    case degree > 180 && degree < 270:
      return 'SW';
      break;
    case degree > 270 && degree < 360:
      return 'NW';
      break;
    default:
      break;
  }
}

function getHourAndMinutes(timestamp: number) {
  const date = new Date(timestamp * 1000);
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();

  if (hours.length <= 1) hours = `0${hours}`;
  if (minutes.length <= 1) minutes = `0${minutes}`;

  return `${hours}:${minutes}`;
}

function getHourNoMinutes(timestamp: number) {
  const date = new Date(timestamp * 1000);
  let hours = date.getHours().toString();

  if (hours.length <= 1) hours = `0${hours}`;

  return `${hours}`;
}

function getVisibilityDesctiption(distanceInMeters: number) {
  switch (true) {
    case distanceInMeters <= 1000:
      return 'Very Poor';
      break;
    case distanceInMeters > 1000 && distanceInMeters <= 4000:
      return 'Poor visibility.';
      break;
    case distanceInMeters > 4000 && distanceInMeters <= 10000:
      return 'Medium visibility.';
      break;
    case distanceInMeters > 10000 && distanceInMeters <= 20000:
      return 'Good visibility.';
      break;
    case distanceInMeters > 20000 && distanceInMeters <= 40000:
      return 'Very good visibility.';
      break;
    case distanceInMeters > 40000:
      return 'Very good visibility.';
      break;
    default:
      break;
  }
}

const standardPressureValue = 1013;

function getPressureDescription(pressure: number) {
  return pressure > standardPressureValue ? 'High pressure.' : 'Low pressure.';
}

function getHumidityDescription(level: number) {
  switch (true) {
    case level <= 55:
      return 'Dry and comfortable.';
      break;
    case level > 55 && level < 65:
      return `Slightly uncomfortable.`;
      break;
    case level >= 65:
      return 'Lots of moisture, uncomfortable.';
      break;
    default:
      break;
  }
}

function getPrecipitationDescription(pop: number) {
  switch (true) {
    case pop < 0.2:
      return 'No chance, ';
      break;
    case pop >= 0.2 && pop < 0.3:
      return 'Slight chance, ';
      break;
    case pop >= 0.3 && pop < 0.6:
      return 'A chance, ';
      break;
    case pop >= 0.6 && pop < 0.7:
      return 'Likely, ';
      break;
    case pop >= 0.7:
      return 'Most likely, ';
    default:
      break;
  }
}

// weather icon url: 'http://openweathermap.org/img/w/10d.png';

const getTilesMap = (today: Record<string, any>): TileProps[] => [
  {
    icon: 'feels',
    title: 'feels like',
    info: <Degree temp={Math.floor(today.main.feels_like)} />,
    description: `${
      today.main.feels_like < today.main.temp
        ? 'Feels colder.'
        : 'Feels warmer.'
    }`,
  },
  {
    icon: 'wind',
    title: 'wind',
    info: `${Math.round(today.wind.speed)} km/h ${getWindDirection(
      today.wind.deg
    )}`,
    description: `Gust ${today.wind.gust.toFixed(1)} km/h.`,
  },
  {
    icon: 'visibility',
    title: 'visibility',
    info: `${today.visibility / 1000} km`,
    description: `${getVisibilityDesctiption(today.visibility)}`,
  },
  {
    icon: 'pressure',
    title: 'pressure',
    info: `${today.main.pressure} hPa`,
    description: `${getPressureDescription(today.main.pressure)}`,
  },
  {
    icon: 'humidity',
    title: 'humidity',
    info: `${today.main.humidity}%`,
    description: `${getHumidityDescription(today.main.humidity)}`,
  },

  {
    icon: 'precipitation',
    title: 'precipitation',
    info: `${Math.round(today.pop * 100)}%`,
    description: `${getPrecipitationDescription(today.pop)} clouds at ${
      today.clouds.all
    }%.`,
  },
];

function Forecast({ data }: Props) {
  const today = data.list[0];

  // how to write this funciton for feelsLike?
  // function feelsLike() {
  //   today.main.feels_like < today.main.temp ? 'colder' : 'warmer';
  // }

  return (
    <div className="w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto items-center">
      <div className="mx-auto w-[300px] ">
        <section className="text-center">
          <h2 className="text-2xl font-black text-neutral-900">
            {data.name}
            <span className="font-thin">,{data.country}</span>
          </h2>
          <h1 className="text-4xl font-bold text-neutral-900">
            <Degree temp={Math.round(today.main.temp)} />
          </h1>
          <h3 className="text-neutral-800">{today.weather[0].main}</h3>
          <p className="text-neutral-800">
            from <Degree temp={Math.floor(today.main.temp_min)} /> to{' '}
            <Degree temp={Math.ceil(today.main.temp_max)} />
          </p>
        </section>

        <section className="flex overflow-x-scroll mt-4 pb-2">
          {data.list.map((item, i) => {
            return (
              <div
                className="inline-block w-[50px] text-center flex-shrink-0"
                key={i}
              >
                {/* TO FUTURE SELF: the below works to get hour from datetime */}
                <p className="text-xs text-neutral-400">
                  {!i ? 'Now' : getHourNoMinutes(item.dt)}
                </p>
                <img
                  alt={`weather-icon-${item.weather[0].description}`}
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                />
                <p className="text-sm font-medium pb-2">
                  <Degree temp={Math.round(item.main.temp)} />
                </p>
              </div>
            );
          })}
        </section>

        <section className="grid grid-cols-2 gap-5 items-center justify-items-center pt-4">
          <div className="text-sm text-neutral-500 space-y-1">
            <Sunrise />
            <div>{getHourAndMinutes(data.sunrise)}</div>
          </div>
          <div className="text-sm text-neutral-500 space-y-1">
            <Sunset />
            <div>{getHourAndMinutes(data.sunset)}</div>
          </div>

          {getTilesMap(today).map((tile) => {
            return (
              <Tile
                icon={tile.icon}
                title={tile.title}
                info={tile.info}
                description={tile.description}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Forecast;
