"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  breakpoints,
  colorPallet,
  typography,
} from "../../app/styles/themes/index";
import { shadows } from "@/app/styles/themes/shadows";
import { ReactNode } from "react";
import { Box } from "@mui/material";

const StyleProvider = ({ children }: { children: ReactNode }) => {
  const theme = createTheme({
    breakpoints,
    palette: colorPallet,
    typography,
    shadows: shadows,
  });
  return (
    <ThemeProvider theme={{ ...theme }}>
      <Box position="relative">{children}</Box>
    </ThemeProvider>
  );
};

export default StyleProvider;
