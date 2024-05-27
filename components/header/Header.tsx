import React from "react";
import bg from "@/assets/images/Home-Slider.jpeg";
import { Box, Stack } from "@mui/material";
import Content from "./components/Content";
import SearchInput from "./components/SearchInput";
import Image from "next/image";

const Header = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        padding: "0px 200px",
        width: "100%",
        height: "60vh",
        bgcolor: "#fff",
        backgroundImage: `linear-gradient(to right bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

        gap: "45px",
      }}
    >
      <Content />
      <SearchInput />
    </Stack>
  );
};

export default Header;
