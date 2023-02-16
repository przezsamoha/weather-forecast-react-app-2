import { ForecastDataProps } from "../types";

import ForecastHeader from "./ForecastHeader";
import ForecastIntervalsSection from "./ForecastIntervalSection";
import ForecastSunriseSunsetSection from "./ForecastSunriseSunsetSection";
import ForecastTilesSection from "./ForecastTilesSection";

export interface ForecastProps {
  forecastData: ForecastDataProps;
}

export default function Forecast({ forecastData }: ForecastProps) {
  return (
    <div className="w-full h-full m-auto md:w-full md:py-10 md:px-10 flex justify-center items-center dark:bg-neutral-800">
      <div className="w-[250px]">
        <ForecastHeader forecastData={forecastData} />
        <ForecastIntervalsSection forecastData={forecastData} />
        <ForecastSunriseSunsetSection forecastData={forecastData} />
        <ForecastTilesSection forecastData={forecastData} />
      </div>
    </div>
  );
}
