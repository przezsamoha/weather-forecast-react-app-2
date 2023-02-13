import { ForecastProps } from '../types';
import SunriseIcon from './Icons/SunriseIcon';
import SunsetIcon from './Icons/SunsetIcon';
import Tile, { TileProps } from './Tile';
import Degree from './Degree';

import {
  getHourAndMinutes,
  getHourNoMinutes,
  getTilesBlueprint,
} from '../helpers';

interface Props {
  data: ForecastProps;
}

function Forecast({ data }: Props) {
  const today = data.list[0];

  return (
    <div className="dark:bg-neutral-800 w-full md:py-10 md:px-10 flex justify-center items-center h-full">
      <div className="w-[300px]">
        <section className="text-center">
          <h2 className="text-2xl font-black text-neutral-900  dark:text-neutral-200">
            {data.name}
            <span className="font-thin">,{data.country}</span>
          </h2>
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-200">
            <Degree temp={Math.round(today.main.temp)} />
          </h1>
          <h3 className="text-neutral-800 dark:text-neutral-300">
            {today.weather[0].main}
          </h3>
          <p className="text-neutral-800 dark:text-neutral-300">
            from <Degree temp={Math.floor(today.main.temp_min)} /> to{' '}
            <Degree temp={Math.ceil(today.main.temp_max)} />
          </p>
        </section>

        <section
          aria-label="three hour forecast"
          tabIndex={0}
          className="dark:bg-neutral-700/25 dark:rounded-md dark:pt-2 dark:pb-2 dark:pl-1 flex overflow-x-scroll mt-6 pb-2 dark:text-neutral-200"
        >
          {data.list.map((item, i) => {
            return (
              <div
                tabIndex={0}
                className="inline-block w-[50px] text-center flex-shrink-0"
                key={i}
              >
                <p className="text-xs text-neutral-500 dark:text-neutral-200">
                  {i <= 0 ? 'Now' : getHourNoMinutes(item.dt)}
                </p>
                <p>
                  <img
                    alt={`${item.weather[0].description}`}
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  />
                </p>
                <p className="text-sm font-medium pb-2">
                  <Degree temp={Math.round(item.main.temp)} />
                </p>
              </div>
            );
          })}
        </section>

        <section
          tabIndex={0}
          className="grid grid-cols-2 gap-5 items-center justify-items-center pt-4 "
        >
          <div
            tabIndex={0}
            className="text-sm text-neutral-500 space-y-1 dark:text-neutral-300"
          >
            <p
              aria-label="Sunrise at"
              className="grid place-items-center dark:text-neutral-400"
            >
              <SunriseIcon />
            </p>
            <div>{getHourAndMinutes(data.sunrise)}</div>
          </div>
          <div
            tabIndex={0}
            className="text-sm text-neutral-500 space-y-1 dark:text-neutral-300"
          >
            <p
              aria-label="Sunset at"
              className="grid place-items-center dark:text-neutral-400"
            >
              <SunsetIcon />
            </p>
            <div>{getHourAndMinutes(data.sunset)}</div>
          </div>

          {getTilesBlueprint(today).map((tile, index) => {
            return (
              <Tile
                key={index}
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
