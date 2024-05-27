import { Box, Stack, Typography } from "@mui/material";
import { Items } from "./content";
import Image from "next/image";

const ServicesItems = () => {
  return (
    <Stack flexWrap="wrap" direction="row" gap="40px">
      {Items.map((item) => (
        <Stack
          padding="30px"
          borderRadius="4px"
          alignItems="center"
          justifyContent="center"
          border="1px solid #eee"
          key={item.label}
          width="150px"
        >
          <Image src={item.imgUrl} width="100" height="100" alt={item.label} />

          <Typography color="#000">{item.label}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default ServicesItems;
