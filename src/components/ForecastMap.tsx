import { Icon } from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import markerIcon from "./Icons/markerIcon.png";

interface ForecastMapProps {
  lat: number;
  lon: number;
  darkMode: boolean;
}

export default function ForecastMap({ lat, lon, darkMode }: ForecastMapProps) {
  const marker = new Icon({
    // iconUrl:
    //   "https://icon-library.com/images/location-pin-icon-png/location-pin-icon-png-21.jpg",
    iconUrl: markerIcon,
    iconSize: [38, 38],
  });

  return (
    <MapContainer className="h-44" center={[lat, lon]} zoom={13}>
      <div>
        {darkMode ? (
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          />
        ) : (
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          />
        )}
      </div>
      <Marker position={[lat, lon]} icon={marker}></Marker>
    </MapContainer>
  );
}
