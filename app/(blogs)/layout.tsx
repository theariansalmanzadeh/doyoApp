import { Stack } from "@mui/material";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Stack padding={{ xs: "40px 20px", md: "40px 150px" }}>{children}</Stack>
  );
};

export default layout;
