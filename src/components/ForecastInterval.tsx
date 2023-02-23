import { ForecastListElementProps } from "../types";
import { formatTimestampToGetHours } from "../helpers";

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
      className="inline-block w-[43px] mb-2 text-center flex-shrink-0 overscroll-contain"
      key={index}
    >
      <p className="text-xxs font-extralight text-neutral-500 dark:text-neutral-200">
        {index <= 0
          ? "Now"
          : formatTimestampToGetHours(forecastIntervalData.dt)}
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
