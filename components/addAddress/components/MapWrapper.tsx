"use client";

import { useMemo } from "react";

import dynamic from "next/dynamic";

const MapWrapper = ({
  isFieldEmpty,
  clickHandler,
}: {
  isFieldEmpty: boolean;
  clickHandler: (val: boolean) => void;
}) => {
  const MapPin = useMemo(
    () =>
      dynamic(() => import("./MapPin"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return (
    <div>
      <MapPin isFieldEmpty={isFieldEmpty} clickHandler={clickHandler} />
    </div>
  );
};

export default MapWrapper;
