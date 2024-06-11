import { useAcceptedRequest, useProfileInfo } from "@/state";
import { Box, Button, Stack, Typography } from "@mui/material";
import star from "@/assets/images/star.png";
import serviceProvider3 from "@/assets/images/serviceman3.jpg";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";
import Image from "next/image";
import React from "react";
import { blue } from "@mui/material/colors";

const ProviderContactDetails = () => {
  const [profileInfo] = useProfileInfo();

  function displayStars() {
    let starArray = [];
    for (let i = 0; i < 5; i++) {
      starArray.push(
        <Image
          src={star}
          width="10"
          height="10"
          alt="service provider"
          style={{ borderRadius: "50%" }}
        />
      );
    }
    return starArray;
  }
  return (
    <>
      <Typography variant="subtitle1">Selected Provider</Typography>
      <Stack direction="row" justifyContent="space-between" paddingTop="35px">
        <Stack direction="row" gap="10px">
          <Image
            src={profileInfo.imgUrl ?? serviceProvider3}
            width="55"
            alt="service provider"
            style={{ borderRadius: "50%" }}
          />
          <Stack>
            <Typography variant="body2">{profileInfo.name}</Typography>
            <Stack direction="row" gap="10px" alignItems="center">
              <Stack direction="row" gap="2px">
                {displayStars()}
              </Stack>

              <Typography color="#909090" fontSize="10px" lineHeight="18px">
                ({profileInfo.votes ?? 0})
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Box>
          <Button
            variant="outlined"
            sx={{
              padding: "2px",
              border: "1px solid",
              borderColor: blue[400],
              color: blue[400],
              marginRight: "10px",
            }}
          >
            <TelegramIcon /> Chat
          </Button>
          <Button
            variant="outlined"
            sx={{
              padding: "2px",
              border: "1px solid",
              borderColor: blue[400],
              color: blue[400],
            }}
          >
            <PhoneIcon /> Call
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default ProviderContactDetails;
