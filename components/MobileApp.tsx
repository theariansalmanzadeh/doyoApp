import { Box, Button, Stack, Typography } from "@mui/material";
import appStore from "@/assets/images/appstore.png";
import playStore from "@/assets/images/googleplay.png";
import mobilePreview from "@/assets/images/mobileDemo.png";
import Image from "next/image";

const MobileApp = () => {
  return (
    <Stack
      display={{ xxs: "none", md: "flex" }}
      direction="row"
      margin="100px 0px 150px 0px"
      padding="0px 200px"
      bgcolor="#edeeee"
      justifyContent="space-between"
      position="relative"
    >
      <Box>
        <Image
          src={mobilePreview}
          alt="Sorosh mobile app"
          width="150"
          style={{ position: "absolute", top: "-30%", left: "20%" }}
        />
      </Box>
      <Stack gap="10px" padding="40px 0px" flexBasis="50%">
        <Typography variant="h6"> Pro services in your hands</Typography>
        <Typography>
          Download the Duo mobile application to easily use its services by
          receiving numerous rewards and airdrops
        </Typography>
        <Box alignSelf="flex-start">
          <Button sx={{ padding: "0px" }}>
            <Image src={appStore} width="150" alt="app store" />
          </Button>
          <Button sx={{ padding: "0px" }}>
            <Image
              src={playStore}
              style={{ width: "150px" }}
              alt="play store"
            />
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default MobileApp;
