"use client";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import pin from "@/assets/images/marker-doyo.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useOrderSection, useSavedAddresses, useServiceRequest } from "@/state";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SyntheticEvent, useState } from "react";
import { styleBtn } from "@/app/styles/Inputbutton";
import { wrapperStyles, wrapperStylesWhereSection } from "./styles";

const WhatForm = () => {
  const [addressActive, setAddressActive] = useState<number>(1);
  const [, setOrderSection] = useOrderSection();
  const [serviceRequest, setServiceRequest] = useServiceRequest();
  const [savedAddresses] = useSavedAddresses();
  const handleChange = (event: SyntheticEvent<Element, Event>) => {
    //@ts-ignore
    setServiceRequest({ ...serviceRequest, where: event.target.name });
  };
  return (
    <Box padding="10px">
      <Stack sx={wrapperStylesWhereSection} direction="row">
        <Stack direction="row" alignItems="center">
          <Image src={pin} alt="cleaning" width={40} />
          <Typography variant="subtitle1">
            Vaughn <ExpandMoreIcon fontSize="small" />
          </Typography>
        </Stack>
        <Button
          onClick={() => {
            setOrderSection({ title: "address", page: 5 });
          }}
          sx={{ color: "blue" }}
        >
          Add New
        </Button>
      </Stack>
      <FormGroup sx={{ gap: "25px" }}>
        <FormControlLabel
          sx={{
            color: "#000",
            backgroundColor: "#eee",
            borderRadius: "4px",
            margin: "0px",
          }}
          name="Home (9655 Yonge St)"
          checked={addressActive === 1}
          control={<Checkbox />}
          onChange={(e) => {
            setAddressActive(1);
            handleChange(e);
          }}
          label="Home (9655 Yonge St)"
          // sx={{
          //   color: pink[800],
          //   "&.Mui-checked": {
          //     color: pink[600],
          //   },
          // }}
        />
        <FormControlLabel
          control={<Checkbox />}
          checked={addressActive === 2}
          onChange={(e) => {
            setAddressActive(2);
            handleChange(e);
          }}
          sx={{
            color: "#000",
            backgroundColor: "#eee",
            borderRadius: "4px",
            margin: "0px",
          }}
          name="Office (5496 Yonge St)"
          label="Office (5496 Yonge St)"
        />
        {savedAddresses.length > 0 &&
          savedAddresses.map((address, indx) => (
            <FormControlLabel
              control={<Checkbox />}
              key={address.Address}
              checked={addressActive === 3 + indx}
              onChange={(e) => {
                setAddressActive(3 + indx);
                handleChange(e);
              }}
              sx={{
                color: "#000",
                backgroundColor: "#eee",
                borderRadius: "4px",
                margin: "0px",
              }}
              name={address.title}
              label={address.title}
            />
          ))}
      </FormGroup>
      <Box>
        <Button
          sx={styleBtn}
          onClick={() => {
            setOrderSection({ title: "sum", page: 4 });
          }}
        >
          Next <ArrowForwardIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default WhatForm;
