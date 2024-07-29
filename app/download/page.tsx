import { Box, Button, Stack, Typography } from "@mui/material";
import ServiceProvider from "@/assets/images/cleaning2.jpg";
import appStore from "@/assets/images/appstore.png";
import playStore from "@/assets/images/googleplay.png";
import mobileDemo from "@/assets/images/mobileDemo.png";
import Image from "next/image";

const Download = () => {
  return (
    <Stack
      padding={{ xxs: "20px 10px", md: "40px 200px" }}
      alignItems="center"
      gap="50px"
    >
      <Box>
        <Typography variant="h5" paddingBottom="30px">
          Users app
        </Typography>
        <Stack
          direction={{ xxs: "column", md: "row" }}
          gap="50px"
          justifyContent="space-between"
        >
          <Stack alignItems="center">
            <Image
              src={mobileDemo}
              alt="cleaning"
              height={350}
              style={{ borderRadius: "8px" }}
            />
          </Stack>
          <Stack flexBasis="60%">
            <Typography>
              Pro services in your hands Download the Duo mobile application to
              easily use its services by receiving numerous rewards and airdrops
            </Typography>
            <Stack direction="row" paddingTop="50px">
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
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Box>
        <Typography variant="h5" paddingBottom="30px">
          Service Provider
        </Typography>
        <Stack direction={{ xxs: "column-reverse", md: "row" }} gap="50px">
          <Stack flexBasis="40%">
            <Typography>
              Pro services in your hands Download the Duo mobile application to
              easily use its services by receiving numerous rewards and airdrops
            </Typography>
            <Stack direction="row" paddingTop="50px">
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
            </Stack>
          </Stack>
          <Box>
            <Image
              src={ServiceProvider}
              alt="cleaning"
              style={{ borderRadius: "8px" }}
            />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Download;
