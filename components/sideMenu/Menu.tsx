"use client";

import { useIsMenuOpen } from "@/state";
import { Box, Drawer, useMediaQuery, useTheme } from "@mui/material";
import HeaderMenu from "./components/HeaderMenu";
import BodyMenu from "./components/BodyMenu";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useIsMenuOpen();
  return (
    <Drawer open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
      <Box width="30vw">
        <HeaderMenu />
        <BodyMenu />
      </Box>
    </Drawer>
  );
};

export default Menu;
