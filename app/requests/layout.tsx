import RequestWrapper from "@/components/generals/RequestWrapper";
import { Box, Stack } from "@mui/material";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack alignItems="center" justifyContent="center">
      <Box
        width={{ xs: "100%", sm: "90%", md: "50%", lg: "30%" }}
        padding={{ xs: "25px" }}
        sx={{ marginY: "50px", position: "relative" }}
        minHeight="100vh"
      >
        <RequestWrapper>{children}</RequestWrapper>
      </Box>
    </Stack>
  );
};

export default layout;
