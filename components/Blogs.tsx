import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Blogs = () => {
  return (
    <Box padding={{ xs: "100px 25px", lg: "40px 200px" }}>
      <Typography variant="h6" marginBottom="10px">
        Latest news & blogs
      </Typography>
      <Stack
        direction="row"
        flexWrap={{ xs: "wrap" }}
        gap={{ xs: "25px", md: "50px" }}
      >
        <Box
          sx={{ backgroundColor: "#edeeee", width: "150px", height: "150px" }}
        />
        <Box
          sx={{ backgroundColor: "#edeeee", width: "150px", height: "150px" }}
        />
        <Box
          sx={{ backgroundColor: "#edeeee", width: "150px", height: "150px" }}
        />
        <Box
          sx={{ backgroundColor: "#edeeee", width: "150px", height: "150px" }}
        />
      </Stack>
    </Box>
  );
};

export default Blogs;
