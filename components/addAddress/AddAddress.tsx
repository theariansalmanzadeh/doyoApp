"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import Input from "../generals/input/Input";
import Divider from "../generals/Devider";
import { useOrderSection, useSavedAddresses } from "@/state";
import { ISavedAddresses } from "@/types";
import MapWrapper from "./components/MapWrapper";
// import MapPin from "./components/MapPin";

const AddAddress = () => {
  const [savedAddresses, setSavedAddresses] = useSavedAddresses();
  const [isMapPinned, setIsMapPinned] = useState<boolean>(false);
  const [orderSection, setOrderSection] = useOrderSection();
  const addressRef = useRef<ISavedAddresses>({
    title: "",
    Address: "",
    unit: "",
    postCode: "",
  });

  return (
    <Stack>
      <Stack gap="25px">
        <Input
          label="Title"
          placeholder=" Exp : Home"
          onChange={(e) => (addressRef.current.title = e.target.value)}
        />
        <Input
          label=" Address Line"
          placeholder=" Exp : 9655 Yonge st"
          onChange={(e) => (addressRef.current.Address = e.target.value)}
        />
        <Input
          label=" Unit/Apt No"
          placeholder="  unit or apartment number"
          onChange={(e) => (addressRef.current.unit = e.target.value)}
        />
        <Input
          label=" Postal Code"
          placeholder=" Postal code"
          onChange={(e) => (addressRef.current.postCode = e.target.value)}
        />
      </Stack>
      <Divider />
      <Box sx={{ width: "100%", height: "40vh", overflow: "hidden" }}>
        <MapWrapper
          clickHandler={setIsMapPinned}
          isFieldEmpty={addressRef.current.Address.length > 0 ? false : true}
        />
      </Box>
      <Button
        sx={{
          color: "#fff",
          backgroundColor: "navy",
          marginTop: "30px",
          width: "100%",
          alignSelf: "center",
          marginX: "auto",
          display: "block",
          padding: "10px 0px",
        }}
        onClick={() => {
          if (!isMapPinned)
            setSavedAddresses([...savedAddresses, addressRef.current]);
          setOrderSection({ title: "where", page: 3 });
        }}
      >
        Save
      </Button>
    </Stack>
  );
};

export default AddAddress;
