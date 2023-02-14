import SunriseIcon from './Icons/SunriseIcon';
import SunsetIcon from './Icons/SunsetIcon';
import { ForecastDataProps } from '../types';
import { getHourAndMinutes } from '../helpers';

interface ForecastSunriseSunsetSectionProps {
  forecastData: ForecastDataProps;
}

export default function ForecastSunriseSunsetSection({
  forecastData,
}: ForecastSunriseSunsetSectionProps) {
  return (
    <div className="grid grid-cols-2 gap-5 items-center justify-items-center pt-4 ">
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
    </div>
  );
}
