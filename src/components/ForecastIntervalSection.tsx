import { ForecastDataProps } from "../types";

import ForecastInterval from "./ForecastInterval";

interface ForecastIntervalsSectionProps {
  forecastData: ForecastDataProps;
}

export default function ForecastIntervalsSection({
  forecastData,
}: ForecastIntervalsSectionProps) {
  return (
    <section className="flex overflow-x-scroll pb-2 pt-1 mt-4 dark:text-neutral-200 dark:bg-neutral-700/25 dark:rounded-md">
      {forecastData.list.map((item, i) => {
        return (
          <ForecastInterval forecastIntervalData={item} index={i} key={i} />
        );
      })}
    </section>
  );
}
