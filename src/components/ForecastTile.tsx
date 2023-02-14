import FeelsIcon from './Icons/FeelsIcon';
import HumidityIcon from './Icons/HumidityIcon';
import PrecipitationIcon from './Icons/PrecipitationIcon';
import PressureIcon from './Icons/PressureIcon';
import VisibilityIcon from './Icons/VisibilityIcon';
import WindIcon from './Icons/WindIcon';

export interface ForecastTileProps {
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
  wind: WindIcon,
  feels: FeelsIcon,
  humidity: HumidityIcon,
  pressure: PressureIcon,
  visibility: VisibilityIcon,
  precipitation: PrecipitationIcon,
};

export default function ForecastTile({
  icon,
  title,
  info,
  description,
}: ForecastTileProps) {
  const Icon = icons[icon];

  return (
    <article className="dark:bg-neutral-700/25 w-[140px] h-[140px] flex flex-col items-start justify-between bg-neutral-100 rounded-md p-2">
      <div className="flex space-x-2 dark:text-neutral-400 text-neutral-600 text-sm">
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
