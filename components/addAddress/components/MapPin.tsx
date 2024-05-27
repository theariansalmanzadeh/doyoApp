//@ts-nocheck
"use client";

import { useSavedAddresses } from "@/state";
import { useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMapEvents } from "react-leaflet/hooks";

const MapPin = ({
  isFieldEmpty,
  clickHandler,
}: {
  isFieldEmpty: boolean;
  clickHandler: (val: boolean) => void;
}) => {
  const [savedAddresses, setSavedAddresses] = useSavedAddresses();

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click(e) {
        const x = map.locate();

        setPosition(e.latlng);
        if (isFieldEmpty)
          setSavedAddresses([
            ...savedAddresses,
            {
              title: `new Address${savedAddresses.length + 1}`,
              Address: `${e.latlng.lat.toString()},${e.latlng.lng.toString()}`,
              unit: "-",
              postCode: "-",
            },
          ]);
        clickHandler(true);
      },
      // locationfound(e) {
      //   console.log(e);

      //   // map.flyTo(e.latlng, map.getZoom());
      // },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>Your address</Popup>
      </Marker>
    );
  }
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[51.505, -0.09]}> */}
      {/* <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup> */}
      {/* </Marker> */}
      <LocationMarker />
    </MapContainer>
  );
};

export default MapPin;
