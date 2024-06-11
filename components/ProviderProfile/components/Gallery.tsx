import { Box, Stack, Typography } from "@mui/material";
import galleryPic1 from "@/assets/images/cleaning4.jpg";
import galleryPic2 from "@/assets/images/cleaning1.jpg";
import galleryPic3 from "@/assets/images/cleaning2.jpg";
import Image from "next/image";

const Gallery = () => {
  return (
    <Box marginTop="28px">
      <Typography variant="subtitle1">Photos</Typography>
      <Stack direction="row" justifyContent="space-between">
        <Image src={galleryPic1} width="120" alt="cleaning" />
        <Image src={galleryPic2} width="120" alt="cleaning" />
        <Image src={galleryPic3} width="120" alt="cleaning" />
      </Stack>
    </Box>
  );
};

export default Gallery;
