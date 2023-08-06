import { Icon } from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import markerIcon from "./Icons/markerIcon.png";

interface ForecastMapProps {
  lat: number;
  lon: number;
  darkMode: boolean;
}

const URL = "https://tiles.stadiamaps.com/tiles";
const darkModeParam = "alidade_smooth_dark/{z}/{x}/{y}{r}.png";
const lightModeParam = "alidade_smooth/{z}/{x}/{y}{r}.png";

export default function ForecastMap({ lat, lon, darkMode }: ForecastMapProps) {
  const marker = new Icon({
    iconUrl: markerIcon,
    iconSize: [38, 38],
  });

  return (
    <MapContainer className="h-44 mt-5" center={[lat, lon]} zoom={13}>
      <div>
        <TileLayer
          className="text-sm"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url={`${URL}/${darkMode ? darkModeParam : lightModeParam}`}
        />
      </div>
      <Marker position={[lat, lon]} icon={marker}></Marker>
    </MapContainer>
  );
}
