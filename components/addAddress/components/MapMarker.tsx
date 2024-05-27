import { useSavedAddresses } from "@/state";
import { Icon, LatLngExpression } from "leaflet";
import Image from "next/image";
import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import Logo from "@/assets/images/marker-doyo.png";

function LocationMarker({
  isFieldEmpty,
  clickHandler,
}: {
  isFieldEmpty: boolean;
  clickHandler: (val: boolean) => void;
}) {
  const [position, setPosition] = useState<null | number[]>(null);
  const [savedAddresses, setSavedAddresses] = useSavedAddresses();
  console.log(position);

  const map = useMapEvents({
    click(e) {
      const x = map.locate();

      //@ts-ignore
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
  });
  let myIcon = new Icon({
    iconUrl: "@/assets/images/marker-doyo.png",
    // iconSize: [38, 95],
    // iconAnchor: [22, 94],
    // popupAnchor: [-3, -76],
    shadowUrl: "@/assets/images/marker-doyo.png",
    // shadowSize: [68, 95],
    // shadowAnchor: [22, 94],
  });

  return position === null ? null : (
    <Marker icon={myIcon} position={position as LatLngExpression}>
      <Popup>Your address</Popup>
    </Marker>
  );
}

export default LocationMarker;
