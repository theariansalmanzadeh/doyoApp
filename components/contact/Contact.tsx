import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Content from "./components/Content";
import FormInput from "./components/FormInput";

const Contact = () => {
  return (
    <Stack direction="row" padding="40px 200px" justifyContent="space-between">
      <Box flexBasis="40%">
        <Typography variant="h6">Become an Expert</Typography>
        <Content />
      </Box>
      <FormInput />
    </Stack>
  );
};

export default Contact;
