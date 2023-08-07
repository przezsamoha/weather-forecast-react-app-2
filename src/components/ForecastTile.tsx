import FeelsIcon from "./Icons/FeelsIcon";
import HumidityIcon from "./Icons/HumidityIcon";
import PrecipitationIcon from "./Icons/PrecipitationIcon";
import PressureIcon from "./Icons/PressureIcon";
import VisibilityIcon from "./Icons/VisibilityIcon";
import WindIcon from "./Icons/WindIcon";

export interface ForecastTileProps {
  icon:
    | "wind"
    | "feels"
    | "humidity"
    | "pressure"
    | "visibility"
    | "precipitation";
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
    <article className="w-[95px] h-[95px] flex flex-col items-start justify-between bg-neutral-100 rounded-md p-2 dark:bg-neutral-500/25 dark:text-neutral-300">
      <div className="flex items-center font-extralight justify-center space-x-1 text-neutral-500 dark:text-neutral-300/90">
        <Icon />
        <h4 className="text-xxxs font-medium uppercase">{title}</h4>
      </div>
      <h3 className="text-md font-medium">{info}</h3>
      <p className="text-xxs">{description}</p>
    </article>
  );
}
