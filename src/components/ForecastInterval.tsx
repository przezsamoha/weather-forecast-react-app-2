import { ForecastListElementProps } from "../types";
import { getHourNoMinutes } from "../helpers";

import Degree from "./Degree";

interface ForecastIntervalProps {
  forecastIntervalData: ForecastListElementProps;
  index: number;
}

export default function ForecastInterval({
  forecastIntervalData,
  index,
}: ForecastIntervalProps) {
  return (
    <div
      className="inline-block w-[43px] mb-2 text-center flex-shrink-0"
      key={index}
    >
      <p className="text-xxs font-extralight text-neutral-500 dark:text-neutral-200">
        {index <= 0 ? "Now" : getHourNoMinutes(forecastIntervalData.dt)}
      </p>
      <p>
        <img
          alt={`${forecastIntervalData.weather[0].description}`}
          src={`http://openweathermap.org/img/wn/${forecastIntervalData.weather[0].icon}@2x.png`}
        />
      </p>
      <p className="text-xs font-medium pb-2">
        <Degree temp={Math.round(forecastIntervalData.main.temp)} />
      </p>
    </div>
  );
}
