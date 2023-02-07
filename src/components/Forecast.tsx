import { ForecastProps } from '../types';
import Sunrise from './Icons/Sunrise';
import Sunset from './Icons/Sunset';
import Tile from './Tile';
import moment from 'moment';

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

const getHourAndMinutes = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();

  if (hours.length <= 1) hours = `0${hours}`;
  if (minutes.length <= 1) minutes = `0${minutes}`;

  return `${hours}:${minutes}`;
};
const getHourNoMinutes = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  let hours = date.getHours().toString();

  if (hours.length <= 1) hours = `0${hours}`;

  return `${hours}`;
};

// weather icon url: 'http://openweathermap.org/img/w/10d.png';

function Forecast({ data }: Props) {
  const today = data.list[0];

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

        {/* <section className="grid grid-cols-2 gap-5 h-20 items-center justify-items-center"></section> */}

        <section className="grid grid-cols-2 gap-5 items-center justify-items-center pt-4">
          <div className="text-sm text-neutral-500 space-y-1">
            <Sunrise />
            <div>{getHourAndMinutes(data.sunrise)}</div>
          </div>
          <div className="text-sm text-neutral-500 space-y-1">
            <Sunset />
            <div>{getHourAndMinutes(data.sunset)}</div>
          </div>

          <Tile
            icon={'wind'}
            title={'wind'}
            info={'wind'}
            description={'wind'}
          />
          <Tile
            icon={'feels'}
            title={'feels like'}
            info={'feels'}
            description={'feel'}
          />
          <Tile
            icon={'humidity'}
            title={'humidity'}
            info={'humidity'}
            description={'humidity'}
          />
          <Tile
            icon={'pressure'}
            title={'pressure'}
            info={'pressure'}
            description={'pressure'}
          />
          <Tile
            icon={'visibility'}
            title={'visibility'}
            info={'visibility'}
            description={'visibility'}
          />
          <Tile
            icon={'pop'}
            title={'precipitation'}
            info={'pop'}
            description={'pop'}
          />
        </section>
      </div>
    </div>
  );
}

export default Forecast;
