"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import successful from "@/assets/images/verified-green.png";
import Image from "next/image";
import { styleBtn } from "@/app/styles/Inputbutton";
import { useRouter } from "next/navigation";

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
      <Box sx={{ marginTop: "50px", width: "80%" }}>
        <Button
          sx={{ ...styleBtn, marginTop: "30px", width: "100%" }}
          onClick={() => {
            router.push("/requests");
          }}
        >
          My Requests
        </Button>
      </Box>
    </Stack>
  );
};

export default RequestSend;
