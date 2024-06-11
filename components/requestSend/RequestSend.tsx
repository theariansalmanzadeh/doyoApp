"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import successful from "@/assets/images/verified-green.png";
import Image from "next/image";
import { styleBtn } from "@/app/styles/Inputbutton";
import { useRouter } from "next/navigation";
import PendingState from "../generals/PendingState";

const RequestSend = () => {
  const router = useRouter();
  return (
    <Stack alignItems="center" justifyItems="center" justifyContent="center">
      <Stack
        alignItems="center"
        justifyItems="center"
        justifyContent="center"
        gap="20px"
      >
        <Image src={successful} width="100" alt="success" />
        <Typography variant="h5">Request submitted</Typography>
      </Stack>
      <Box sx={{ marginTop: "50px" }}>
        <PendingState />
        <Typography variant="subtitle2">Looking for providers</Typography>
        <Button
          sx={{ ...styleBtn, marginTop: "30px", width: "100%" }}
          onClick={() => {
            router.push("");
          }}
        >
          My Requests
        </Button>
      </Box>
    </Stack>
  );
};

export default RequestSend;
