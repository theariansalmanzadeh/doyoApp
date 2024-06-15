import Input from "@/components/generals/input/Input";
import { Box, Typography } from "@mui/material";
import React from "react";

const PromotCode = () => {
  return (
    <Box
      paddingBottom="47px"
      borderBottom="1px solid"
      borderColor="borderCol.300"
    >
      <Typography>Promo Code</Typography>
      <Input label="" placeholder="enter code" />
    </Box>
  );
};

export default PromotCode;
