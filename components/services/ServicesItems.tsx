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
      gap={{ xxs: "20px", md: "68px" }}
    >
      {Items.map((item) => (
        <Link key={item.label} href="/order">
          <Stack
            borderRadius="5px"
            alignItems="center"
            justifyContent="center"
            border="1px solid #eee"
            width={{ xxs: "100%", md: "175px" }}
            minWidth="160px"
            overflow="hidden"
            position="relative"
            className="service-item"
          >
            <Image src={item.imgUrl} alt={item.label} />
            {/* <Typography color="#000">{item.label}</Typography> */}
          </Stack>
        </Link>
      ))}
    </Stack>
  );
};

export default ServicesItems;
