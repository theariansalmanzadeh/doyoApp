import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import user from "@/assets/images/user.png";

const HeaderMenu = () => {
  return (
    <Stack
      bgcolor="#edeeee"
      gap="15px"
      direction="row"
      padding="40px 10px 20px 20px"
    >
      <Box>
        <Image src={user} alt="user" />
      </Box>
      <Stack gap="10px">
        <Typography variant="subtitle1">SOROUSH OSIVAND</Typography>
        <Typography variant="body1">
          Balance : <span style={{ fontWeight: "bold" }}>$169.22</span>
        </Typography>
        <Button
          sx={{
            alignSelf: "start",
            borderRadius: "4px",
            border: "1px solid #000",
            color: "#000",
            padding: "0px 6px",
          }}
        >
          Edit Profile
        </Button>
      </Stack>
    </Stack>
  );
};

export default HeaderMenu;
