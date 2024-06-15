import { Stack, Typography } from "@mui/material";
import React from "react";

const Content = () => {
  return (
    <Stack
      color="#fff"
      sx={{
        position: "absolute",
        top: "50%",
        transform: { xs: "translate(-50%,-50%)", md: "translate(50%,-50%)" },
      }}
    >
      <Typography variant="h2">What?</Typography>
      <Typography variant="h2">When?</Typography>
      <Typography variant="h2">Where?</Typography>
    </Stack>
  );
};

export default Content;
