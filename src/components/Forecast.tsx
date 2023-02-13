import { ForecastDataProps } from '../types';
import SunriseIcon from './Icons/SunriseIcon';
import SunsetIcon from './Icons/SunsetIcon';
import Tile from './Tile';
import Degree from './Degree';

import { getHourAndMinutes, getTilesBlueprint } from '../helpers';
import ForecastInterval from './ForecastInterval';

interface ForecastProps {
  forecastData: ForecastDataProps;
}

export default function Forecast({ forecastData }: ForecastProps) {
  const today = forecastData.list[0];

  return (
    <div className="dark:bg-neutral-800 w-full md:py-10 md:px-10 flex justify-center items-center h-full">
      <div className="w-[300px]">
        <section className="text-center">
          <h2 className="text-2xl font-black text-neutral-900  dark:text-neutral-200">
            {forecastData.name}
            <span className="font-thin">,{forecastData.country}</span>
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

        <section className="dark:bg-neutral-700/25 dark:rounded-md dark:pt-2 dark:pb-2 dark:pl-1 flex overflow-x-scroll mt-6 pb-2 dark:text-neutral-200">
          {forecastData.list.map((item, i) => {
            return (
              <ForecastInterval forecastIntervalData={item} index={i} key={i} />
            );
          })}
        </section>

        <section className="grid grid-cols-2 gap-5 items-center justify-items-center pt-4 ">
          <div className="text-sm text-neutral-500 space-y-1 dark:text-neutral-300">
            <p className="grid place-items-center dark:text-neutral-400">
              <SunriseIcon />
            </p>
            <div>{getHourAndMinutes(forecastData.sunrise)}</div>
          </div>
          <div className="text-sm text-neutral-500 space-y-1 dark:text-neutral-300">
            <p className="grid place-items-center dark:text-neutral-400">
              <SunsetIcon />
            </p>
            <div>{getHourAndMinutes(forecastData.sunset)}</div>
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
