import { Box, Stack } from "@mui/material";
import React from "react";

const PendingState = () => {
  return (
    <Stack
      direction="row"
      margin="0 auto"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box
        sx={{
          width: "10px",
          height: "10px",
          backgroundColor: "#7CC76A",
        }}
      />
      <Box sx={{ width: "10px", height: "10px", backgroundColor: "#7CC76A" }} />
      <Box sx={{ width: "10px", height: "10px", backgroundColor: "#7CC76A" }} />
      <Box sx={{ width: "10px", height: "10px", backgroundColor: "#7CC76A" }} />
      <Box sx={{ width: "10px", height: "10px", backgroundColor: "#7CC76A" }} />
      <Box sx={{ width: "10px", height: "10px", backgroundColor: "#7CC76A" }} />
    </Stack>
  );
};

export default PendingState;
