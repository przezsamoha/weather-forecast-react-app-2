import Feels from './Icons/Feels';
import Humidity from './Icons/Humidity';
import Pop from './Icons/Pop';
import Pressure from './Icons/Pressure';
import Visibility from './Icons/Visibility';
import Wind from './Icons/Wind';

interface TileProps {
  icon: 'feels' | 'humidity' | 'pop' | 'pressure' | 'visibility' | 'wind';
  title: string;
  info: string | JSX.Element;
  description: string;
}

const icons = {
  feels: Feels,
  humidity: Humidity,
  pop: Pop,
  pressure: Pressure,
  visibility: Visibility,
  wind: Wind,
};

function Tile({ icon, title, info, description }: TileProps) {
  const Icon = icons[icon];

  return (
    <article className=" w-[140px] h-[140px] flex flex-col items-start justify-between bg-neutral-100 rounded-md p-2">
      <div className="flex items-center space-x-2 text-neutral-600 text-sm">
        <Icon />
        <h4 className="text-xs font-medium uppercase">{title}</h4>
      </div>

      <h3 className="text-2xl">{info}</h3>
      <p className="text-sm">{description}</p>
    </article>
  );
}

export default Tile;
