import { MapContainer, Marker, TileLayer } from "react-leaflet";

interface ForecastMapProps {
  lat: number;
  lon: number;
}

export default function ForecastMap({ lat, lon }: ForecastMapProps) {
  return (
    <MapContainer className="h-44" center={[lat, lon]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lon]}></Marker>
    </MapContainer>
  );
}
