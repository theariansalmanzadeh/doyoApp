import { Box } from "@mui/material";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box bgcolor="#fff" padding="25px">
      {children}
    </Box>
  );
};

export default HomeLayout;
