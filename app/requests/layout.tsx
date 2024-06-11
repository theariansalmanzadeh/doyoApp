import RequestWrapper from "@/components/generals/RequestWrapper";
import { Box, Stack } from "@mui/material";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack alignItems="center" justifyContent="center">
      <Box width="30%" sx={{ marginY: "50px" }}>
        <RequestWrapper>{children}</RequestWrapper>
      </Box>
    </Stack>
  );
};

export default layout;
