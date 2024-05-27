import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Blogs = () => {
  return (
    <Box padding="40px 200px">
      <Typography variant="h6" marginBottom="10px">
        Latest news & blogs
      </Typography>
      <Stack direction="row" gap="50px">
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
