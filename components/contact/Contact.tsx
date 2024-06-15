import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Content from "./components/Content";
import FormInput from "./components/FormInput";

const Contact = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      gap={{ xs: "30px", md: "0px" }}
      padding={{ xs: "40px 25px", md: "40px 100px", lg: "40px 200px" }}
      justifyContent="space-between"
    >
      <Box flexBasis="40%">
        <Typography variant="h6">Become an Expert</Typography>
        <Content />
      </Box>
      <FormInput />
    </Stack>
  );
};

export default Contact;
