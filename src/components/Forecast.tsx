import { ForecastDataProps } from "../types";

import ForecastHeader from "./ForecastHeader";
import ForecastIntervalsSection from "./ForecastIntervalSection";
import ForecastSunriseSunsetSection from "./ForecastSunriseSunsetSection";
import ForecastTilesSection from "./ForecastTilesSection";
import ForecastMap from "./ForecastMap";
import Footer from "./Footer";

export interface ForecastProps {
  forecastData: ForecastDataProps;
  lat?: number;
  lon?: number;
  darkMode: boolean;
}

export default function Forecast({
  forecastData,
  lat,
  lon,
  darkMode,
}: ForecastProps) {
  return (
    <div className="h-full flex flex-col justify-center items-center dark:bg-neutral-800">
      <div className="w-[300px]">
        <ForecastHeader forecastData={forecastData} />
        {lat && lon && <ForecastMap darkMode={darkMode} lat={lat} lon={lon} />}
        <ForecastIntervalsSection forecastData={forecastData} />
        <ForecastSunriseSunsetSection forecastData={forecastData} />
        <ForecastTilesSection forecastData={forecastData} />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}
