import { Box, Typography } from "@mui/material";
import ServicesItems from "./ServicesItems";

const Services = () => {
  return (
    <Box
      padding={{
        xs: "100px 24px 20px 24px",
        md: "40px 60px ",
        lg: "40px 210px ",
      }}
      bgcolor="#fff"
    >
      <Typography
        variant="h5"
        color="#000"
        display={{ xs: "none", md: "block" }}
      >
        What do you need?
      </Typography>
      <ServicesItems />
    </Box>
  );
};

export default Services;
