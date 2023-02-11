import Feels from './Icons/Feels';
import Humidity from './Icons/Humidity';
import Precipitation from './Icons/Precipitation';
import Pressure from './Icons/Pressure';
import Visibility from './Icons/Visibility';
import Wind from './Icons/Wind';

export interface TileProps {
  icon:
    | 'wind'
    | 'feels'
    | 'humidity'
    | 'pressure'
    | 'visibility'
    | 'precipitation';
  title: string;
  info: string | JSX.Element;
  description: string | number;
}

const icons = {
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  pressure: Pressure,
  visibility: Visibility,
  precipitation: Precipitation,
};

function Tile({ icon, title, info, description }: TileProps) {
  const Icon = icons[icon];

  return (
    <article
      tabIndex={0}
      className="dark:bg-neutral-700/25 w-[140px] h-[140px] flex flex-col items-start justify-between bg-neutral-100 rounded-md p-2"
    >
      <div
        aria-label={title}
        className="flex space-x-2 dark:text-neutral-500 text-neutral-600 text-sm"
      >
        <Icon />
        <h4 className="text-xs font-medium uppercase ">{title}</h4>
      </div>
      <h3 className="text-2xl  dark:text-neutral-300 dark:font-medium">
        {info}
      </h3>
      <p className="text-sm  dark:text-neutral-300">{description}</p>
    </article>
  );
}

export default Tile;
