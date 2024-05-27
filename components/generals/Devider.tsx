import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Divider = () => {
  return (
    <Stack direction="row" alignItems="center" gap="20px">
      <Box sx={{ width: "40%", height: "1px", backgroundColor: "#eee" }} />
      <Typography color="#666">or</Typography>
      <Box sx={{ width: "40%", height: "1px", backgroundColor: "#eee" }} />
    </Stack>
  );
};

export default Divider;
