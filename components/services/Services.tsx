import { Box, Typography } from "@mui/material";
import ServicesItems from "./ServicesItems";

const Services = () => {
  return (
    <Box padding="40px 280px " bgcolor="#fff">
      <Typography variant="h5" color="#000">
        What do you need?
      </Typography>
      <ServicesItems />
    </Box>
  );
};

export default Services;
