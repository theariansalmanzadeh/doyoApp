import { Box, Button, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";

const Experiences = () => {
  return (
    <Box marginTop="26px" color="secondary.dark">
      <Typography variant="subtitle1">Experience</Typography>
      <Typography variant="body1">
        Hello, I am Sara 35 years old, I am professional service provider in
        Doyo with more than 322 jobs done and 5 star review.
      </Typography>
      <Button variant="text" sx={{ color: blue[600], padding: "0px" }}>
        Read more
      </Button>
    </Box>
  );
};

export default Experiences;
