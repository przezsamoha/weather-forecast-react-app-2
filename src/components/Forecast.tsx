import { ForecastDataProps } from "../types";

import ForecastHeader from "./ForecastHeader";
import ForecastIntervalsSection from "./ForecastIntervalSection";
import ForecastSunriseSunsetSection from "./ForecastSunriseSunsetSection";
import ForecastTilesSection from "./ForecastTilesSection";
import ForecastMap from "./ForecastMap";

export interface ForecastProps {
  forecastData: ForecastDataProps;
  lat?: number;
  lon?: number;
}

export default function Forecast({ forecastData, lat, lon }: ForecastProps) {
  return (
    <div className="w-full h-screen flex justify-center items-center dark:bg-neutral-800">
      <div className="w-[260px] mb-5">
        <ForecastHeader forecastData={forecastData} />
        {lat && lon && <ForecastMap lat={lat} lon={lon} />}
        <ForecastIntervalsSection forecastData={forecastData} />
        <ForecastSunriseSunsetSection forecastData={forecastData} />
        <ForecastTilesSection forecastData={forecastData} />
      </div>
    </div>
  );
}
