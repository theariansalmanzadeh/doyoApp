"use client";

import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Content from "./components/Content";
import FormInput from "./components/FormInput";
import { useElementTasker, useIsMenuOpen, useIsScroll } from "@/state";

const Contact = () => {
  const taskerFormRef = useRef(null);
  const [ElementTasker, setElementTasker] = useElementTasker();
  const [isScroll, setIsScroll] = useIsScroll();
  const [isMenuOpen, setIsMenuOpen] = useIsMenuOpen();

  useEffect(() => {
    setElementTasker(taskerFormRef);
  }, [taskerFormRef, setElementTasker]);

  useEffect(() => {
    console.log(isScroll, !isMenuOpen);

    if (isScroll && !isMenuOpen) {
      ElementTasker.current.scrollIntoView({ block: "center" });
    }
    return () => {
      setIsScroll(false);
    };
  }, [isScroll, isMenuOpen]);

  return (
    <Stack
      ref={taskerFormRef}
      direction={{ xs: "column", md: "row" }}
      gap={{ xs: "30px", md: "0px" }}
      padding={{ xs: "40px 25px", md: "60px 100px", lg: "60px 200px" }}
      justifyContent="space-between"
    >
      <Box flexBasis="40%">
        <Typography variant="h6">Become an Tasker</Typography>
        <Content />
      </Box>
      <FormInput />
    </Stack>
  );
};

export default Contact;
