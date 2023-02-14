import { ForecastDataProps } from '../types';
import { getTilesBlueprint } from '../helpers';

import ForecastTile from './ForecastTile';

interface ForecastTilesSectionProps {
  forecastData: ForecastDataProps;
}

export default function ForecastTilesSection({
  forecastData,
}: ForecastTilesSectionProps) {
  const today = forecastData.list[0];

  return (
    <section className="grid grid-cols-2 gap-5 items-center justify-items-center pt-4 ">
      {getTilesBlueprint(today).map((tile, index) => {
        return (
          <ForecastTile
            key={index}
            icon={tile.icon}
            title={tile.title}
            info={tile.info}
            description={tile.description}
          />
        );
      })}
    </section>
  );
}
