import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { items } from "./content";
import Link from "next/link";
import Login from "./Login";
import Logo from "@/assets/images/marker-doyo.png";

const Navbar = () => {
  return (
    <Stack
      bgcolor="#fff"
      padding="30px 20px 10px 20px"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="4px solid #000"
    >
      <Stack direction="row" padding="0px">
        <Image src={Logo} alt="logo" width={60} />
        <Stack
          alignItems="center"
          gap="20px"
          direction="row"
          paddingLeft="20px"
        >
          {items.map((item) => (
            <Typography variant="subtitle1" color="#000" key={item.label}>
              <Link href={`/${item.url}`}>{item.label}</Link>
            </Typography>
          ))}
        </Stack>
      </Stack>
      <Login />
    </Stack>
  );
};

export default Navbar;
