import { Stack, Typography } from "@mui/material";
import React from "react";
import chat from "@/assets/images/chat(1) copy.png";
import home from "@/assets/images/home.png";
import user from "@/assets/images/user(1).png";
import Image from "next/image";

const MobileNavbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      position="sticky"
      zIndex={100}
      top="95vh"
      right="0"
      width="100%"
      bgcolor="white.400"
      padding="10px 20px"
    >
      <Stack>
        <Image src={chat} width="30" alt="chat" />
        <Typography variant="body1" color="gray.500">
          Chats
        </Typography>
      </Stack>
      <Stack>
        <Image src={home} width="30" alt="chat" />
        <Typography variant="body1" color="gray.500">
          Home
        </Typography>
      </Stack>
      <Stack>
        <Image src={user} width="30" alt="chat" />
        <Typography variant="body1" color="gray.500">
          User
        </Typography>
      </Stack>
    </Stack>
  );
};

export default MobileNavbar;
