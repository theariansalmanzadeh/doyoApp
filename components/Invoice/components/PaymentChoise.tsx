import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const PaymentChoice = ({
  isActive,
  payment,
}: {
  isActive: boolean;
  payment: string;
}) => {
  return (
    <Stack
      direction="row"
      gap="3px"
      bgcolor="borderCol.300"
      padding="10px"
      alignItems="center"
      borderRadius="8px"
      sx={{ cursor: "pointer" }}
    >
      <Box
        sx={{
          width: "15px",
          height: "15px",
          backgroundColor: isActive ? "primary.main" : "gray.200",
          alignSelf: "end",
        }}
      />
      <Typography variant="body2">{payment}</Typography>
    </Stack>
  );
};

export default PaymentChoice;
