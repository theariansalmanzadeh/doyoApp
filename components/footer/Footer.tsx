import { Stack, Typography } from "@mui/material";
import React from "react";
import { items } from "./content";

const Footer = () => {
  return (
    <Stack
      direction={{ xxs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      bgcolor="#edeeee"
      padding="10px 30px 10px 50px"
    >
      <Stack
        direction={{ xxs: "column", md: "row" }}
        gap="20px"
        alignItems="center"
      >
        {items.map((item) => (
          <Typography key={item}> {item}</Typography>
        ))}
      </Stack>
      <Typography padding={{ xxs: "30px", md: "0px" }}>
        Doyo Innovation Solutions Inc.
      </Typography>
    </Stack>
  );
};

export default Footer;
