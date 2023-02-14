import { ForecastDataProps } from '../types';

import ForecastInterval from './ForecastInterval';

interface ForecastIntervalsSectionProps {
  forecastData: ForecastDataProps;
}

export default function ForecastIntervalsSection({
  forecastData,
}: ForecastIntervalsSectionProps) {
  return (
    <section className="dark:bg-neutral-700/25 dark:rounded-md dark:pt-2 dark:pb-2 dark:pl-1 flex overflow-x-scroll mt-6 pb-2 dark:text-neutral-200">
      {forecastData.list.map((item, i) => {
        return (
          <ForecastInterval forecastIntervalData={item} index={i} key={i} />
        );
      })}
    </section>
  );
}
