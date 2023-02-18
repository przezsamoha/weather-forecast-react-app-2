import SunriseIcon from "./Icons/SunriseIcon";
import SunsetIcon from "./Icons/SunsetIcon";
import { ForecastDataProps } from "../types";
import { formatTimestampToGetHoursAndMinutes } from "../helpers";

interface ForecastSunriseSunsetSectionProps {
  forecastData: ForecastDataProps;
}

export default function ForecastSunriseSunsetSection({
  forecastData,
}: ForecastSunriseSunsetSectionProps) {
  return (
    <div className="grid grid-cols-2 pt-3 items-center justify-items-center">
      <div className="text-xs font-medium text-neutral-500 space-y-1 dark:text-neutral-300">
        <p className="grid place-items-center dark:text-neutral-400">
          <SunriseIcon />
        </p>
        <div>{formatTimestampToGetHoursAndMinutes(forecastData.sunrise)}</div>
      </div>
      <div className="text-xs font-medium text-neutral-500 space-y-1 dark:text-neutral-300">
        <p className="grid place-items-center dark:text-neutral-400">
          <SunsetIcon />
        </p>
        <div>{formatTimestampToGetHoursAndMinutes(forecastData.sunset)}</div>
      </div>
    </div>
  );
}
