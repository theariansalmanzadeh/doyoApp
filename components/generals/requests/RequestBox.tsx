import { TOrderState } from "@/types";
import { Box, Stack, Typography } from "@mui/material";
import serviceProvider1 from "@/assets/images/serviceman1.jpg";
import serviceProvider2 from "@/assets/images/serviceman1.jpg";
import serviceProvider3 from "@/assets/images/serviceman3.jpg";
import PendingState from "../PendingState";
import Image from "next/image";
import { blue } from "@mui/material/colors";
import { useDoingRequest } from "@/state";

const RequestBox = ({
  timeOrder,
  title,
  state,
  orderNumber,
}: {
  title: string;
  timeOrder: number;
  state: TOrderState;
  orderNumber: number;
}) => {
  const [doingRequest] = useDoingRequest();
  function RequestBody(state: TOrderState) {
    if (state === "Pending")
      return (
        <>
          <Typography color="#909090"> Looking for providers</Typography>
          <Box width="40%" paddingTop="10px">
            <PendingState />
          </Box>
        </>
      );
    else if (state === "Accepted")
      return (
        <>
          <Typography color="#909090">Ready to work providers </Typography>
          <Stack direction="row" paddingTop="10px">
            <Image
              src={serviceProvider1}
              width="40"
              alt="provider"
              style={{ borderRadius: "50%" }}
            />
            <Image
              src={serviceProvider2}
              width="40"
              alt="provider"
              style={{ borderRadius: "50%", marginLeft: "-10px" }}
            />
            <Image
              src={serviceProvider3}
              width="40"
              alt="provider"
              style={{ borderRadius: "50%", marginLeft: "-10px" }}
            />
          </Stack>
        </>
      );
    else
      return (
        <Stack direction="row" gap="5px">
          <Image
            src={doingRequest.imgUrl ?? ""}
            width="40"
            alt="provider"
            style={{ borderRadius: "50%" }}
          />
          <Typography variant="body2" color="gray.300">
            By {doingRequest.serviceProvider}
          </Typography>
        </Stack>
      );
  }
  return (
    <Stack
      direction="column"
      bgcolor="#eee"
      padding="10px"
      borderRadius="8px"
      sx={{ cursor: state === "Accepted" || "Doing" ? "pointer" : "auto" }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" gap="5px">
          <Typography variant="h5">{title}</Typography>
          <Typography color="#909090" variant="caption">
            {timeOrder}min ago
          </Typography>
        </Stack>
        <Typography
          variant="subtitle1"
          color={state === "Pending" ? "#F79B6B" : blue[600]}
        >
          {state}
        </Typography>
      </Stack>
      <Box marginTop="14px">{RequestBody(state)}</Box>
      <Typography marginTop="24px" alignSelf="end">
        No# {orderNumber}
      </Typography>
    </Stack>
  );
};

export default RequestBox;
