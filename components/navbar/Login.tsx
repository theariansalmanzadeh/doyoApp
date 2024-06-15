"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import user from "@/assets/images/user.png";
import { useIsMenuOpen } from "@/state";

const Login = () => {
  const [, setIsMenuOpen] = useIsMenuOpen();
  return (
    <Button
      onClick={() => setIsMenuOpen(true)}
      sx={{ position: "absolute", right: "0%" }}
    >
      <Stack direction="row" alignItems="center" gap="15px">
        <Stack
          direction="row"
          justifyItems="center"
          alignItems="center"
          color="#000"
        >
          <Typography>Vaughn</Typography>
          <ExpandMoreIcon fontSize="small" />
        </Stack>
        <Image src={user} alt="user" width={35} />
      </Stack>
    </Button>
  );
};

export default Login;
