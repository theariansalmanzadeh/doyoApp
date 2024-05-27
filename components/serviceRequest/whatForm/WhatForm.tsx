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
import cleaning from "@/assets/images/cleaning.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useOrderSection, useServiceRequest } from "@/state";
import { styleBtn } from "@/app/styles/Inputbutton";
import { Services } from "@/types";
import { serviceItems } from "./content";

const WhatForm = () => {
  const [, setOrderSection] = useOrderSection();
  const [serviceRequest, setServiceRequest] = useServiceRequest();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const serviceOrder = serviceRequest.services.add(event.target.name);

    setServiceRequest({ ...serviceRequest, services: serviceOrder });
  };
  return (
    <Box padding="10px">
      <Stack
        direction="row"
        marginBottom="30px"
        padding="10px"
        borderBottom="1px solid #eee"
      >
        <Image src={cleaning} alt="cleaning" width={40} />
        <Box>
          <Typography variant="subtitle1">Cleaning</Typography>
          <Typography variant="subtitle2">What service do you need?</Typography>
        </Box>
      </Stack>
      <FormGroup>
        {serviceItems.map((item) => (
          <FormControlLabel
            key={item}
            control={<Checkbox />}
            //@ts-ignore
            onChange={handleChange}
            label={item}
            name={item}
            // name={Services[`${item as keyof Services}`]}
            sx={{
              // color: "primary.main",
              "&.Mui-checked": {
                color: "primary.main",
              },
            }}
          />
        ))}
      </FormGroup>
      <Box>
        <Button
          sx={styleBtn}
          onClick={() => {
            setOrderSection({ title: "when", page: 2 });
          }}
        >
          Next <ArrowForwardIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default WhatForm;
