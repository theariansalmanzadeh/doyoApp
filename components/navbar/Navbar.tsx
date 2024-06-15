"use client";

import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import { items } from "./content";
import Link from "next/link";
import Login from "./Login";
import Logo from "@/assets/images/logo.png";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const { breakpoints } = useTheme();
  const isLgDown = useMediaQuery(breakpoints.down("lg"));
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        position="relative"
        bgcolor="#fff"
        borderBottom="4px solid #000"
        padding={{ xxs: "30px 20px 50px 20px", lg: "30px 20px 10px 20px" }}
        sx={{ display: { xs: "block", md: "flex" } }}
      >
        <Stack direction="row" padding="0px">
          <Stack direction="row" alignItems="center">
            {!isLgDown && <Image src={Logo} alt="logo" width={60} />}

            <Typography
              variant="h5"
              sx={{ position: { xxs: "absolute", md: "block" } }}
            >
              Doyo
            </Typography>
          </Stack>
          <Stack
            alignItems="center"
            display={{ xxs: "none", lg: "flex" }}
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
      {isLgDown && <MobileNavbar />}
    </>
  );
};

export default Navbar;
