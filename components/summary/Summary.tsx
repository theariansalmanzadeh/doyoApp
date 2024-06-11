"use client";

import { Box, Stack, Typography } from "@mui/material";
import ActionButtons from "./components/ActionButtons";
import { useServiceRequest } from "@/state";
import { IDate } from "@/types";

const Summary = ({ hasSubmitBtn = true }: { hasSubmitBtn?: boolean }) => {
  const [serviceRequest] = useServiceRequest();
  const format = (time: string | IDate) => {
    if (typeof time === "string") return time;
    else
      return `${time.day} at ${time.hour}:${
        time.min === "0" ? "00" : time.min
      }`;
  };

  return (
    <Box padding="10px">
      <Stack direction="column" marginBottom="10px" padding="10px 0px">
        <Typography variant="h6">What?</Typography>
        <Stack
          gap="25px"
          sx={{
            backgroundColor: "#eee",
            borderRadius: "4px",
            padding: "25px 10px",
          }}
        >
          {Array.from(serviceRequest.services).map((service) => (
            <Stack key={service} direction="row" gap="10px" alignItems="center">
              <Box
                sx={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "yellow",
                }}
              />
              <Typography variant="body1">{service}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack direction="column" marginBottom="30px" padding="10px 0px">
        <Typography variant="h6">Where?</Typography>
        <Stack
          gap="25px"
          sx={{
            backgroundColor: "#eee",
            borderRadius: "4px",
            padding: "25px 10px",
          }}
        >
          <Stack direction="row" gap="10px" alignItems="center">
            <Box
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: "yellow",
              }}
            />
            <Typography variant="body1">{serviceRequest.where}</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="column" marginBottom="30px" padding="10px 0px">
        <Typography variant="h6">When?</Typography>
        <Stack
          gap="25px"
          sx={{
            backgroundColor: "#eee",
            borderRadius: "4px",
            padding: "25px 10px",
          }}
        >
          <Stack direction="row" gap="10px" alignItems="center">
            <Box
              sx={{
                width: "10px",
                height: "10px",
                backgroundColor: "yellow",
              }}
            />
            <Typography variant="body1">
              {format(serviceRequest.when)}
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      {hasSubmitBtn && <ActionButtons />}
    </Box>
  );
};

export default Summary;
