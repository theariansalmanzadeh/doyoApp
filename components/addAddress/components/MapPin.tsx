"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./MapMarker";

const MapPin = ({
  isFieldEmpty,
  clickHandler,
}: {
  isFieldEmpty: boolean;
  clickHandler: (val: boolean) => void;
}) => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{
        height: "500px",
        backgroundColor: "white",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocationMarker isFieldEmpty={isFieldEmpty} clickHandler={clickHandler} />
    </MapContainer>
  );
};

export default MapPin;
