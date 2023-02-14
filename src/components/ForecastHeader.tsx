import { ForecastDataProps } from '../types';
import Degree from './Degree';

interface ForecastHeaderProps {
  forecastData: ForecastDataProps;
}

export default function ForecastHeader({ forecastData }: ForecastHeaderProps) {
  const today = forecastData.list[0];

  return (
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
  );
}
