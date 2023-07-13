import { MapContainer, TileLayer } from "react-leaflet";
// import { CityProps } from "../types";

// interface ForecastMapProps {
//   lon: CityProps;
//   lat: CityProps;
// }

export default function ForecastMap() {
  return (
    <MapContainer className="h-44" center={[52.2319581, 21.0067249]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
