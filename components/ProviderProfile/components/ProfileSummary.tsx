import { Box, Stack, Typography } from "@mui/material";
import star from "@/assets/images/star.png";
import Image from "next/image";
import { useProfileInfo } from "@/state";

const ProfileSummary = () => {
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
    <Box>
      <Stack
        key={profileInfo.name}
        direction="row"
        justifyContent="space-between"
        marginTop="35px"
      >
        <Stack direction="row" gap="10px">
          <Image
            src={profileInfo.imgUrl || ""}
            width="75"
            height="75"
            alt="service provider"
            style={{ borderRadius: "50%" }}
          />
          <Stack>
            <Typography variant="body2">{profileInfo.name}</Typography>
            <Stack direction="row" gap="2px" alignItems="start">
              {displayStars()}
              <Typography color="#909090">({profileInfo.votes})</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Typography variant="subtitle1">${profileInfo.wage}/hour</Typography>
      </Stack>
      <Stack direction="row" gap="17px" marginTop="25px">
        <Typography color="#909090" variant="caption">
          Jobs done: <span style={{ color: "#000" }}>322</span>
        </Typography>
        <Typography color="#909090" variant="caption">
          Tools :{" "}
          <span style={{ color: "#000" }}>cleaning machine, Dryers</span>
        </Typography>
      </Stack>
    </Box>
  );
};

export default ProfileSummary;
