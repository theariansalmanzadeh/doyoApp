import { Box, Stack, Typography } from "@mui/material";
import { Items } from "./content";
import Image from "next/image";
import Link from "next/link";

const ServicesItems = () => {
  return (
    <Stack
      flexWrap="wrap"
      justifyContent={{ xxs: "space-between", md: "start" }}
      alignItems="center"
      direction="row"
      gap={{ xxs: "20px", md: "10px" }}
    >
      {Items.map((item) => (
        <Stack
          padding={{ xxs: "40px 20px", lg: "20px" }}
          borderRadius="4px"
          alignItems="center"
          justifyContent="center"
          border="1px solid #eee"
          key={item.label}
          // maxWidth="175px"
          minWidth="160px"
        >
          <Link href="/order">
            <Image src={item.imgUrl} width="75" height="75" alt={item.label} />
            <Typography color="#000">{item.label}</Typography>
          </Link>
        </Stack>
      ))}
    </Stack>
  );
};

export default ServicesItems;
