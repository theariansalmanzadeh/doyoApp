"use client";

import Summary from "@/components/summary/Summary";
import { useIsDetailOpen } from "@/state";
import { Box, Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";

const SumWrapper = () => {
  const [isDetailOpen, setIsDetailOpen] = useIsDetailOpen();
  return (
    <Box>
      {isDetailOpen && (
        <>
          <Summary hasSubmitBtn={false} />{" "}
          <Button
            variant="text"
            sx={{ color: blue[600] }}
            onClick={() => {
              setIsDetailOpen(false);
            }}
          >
            show less
          </Button>
        </>
      )}{" "}
    </Box>
  );
};

export default SumWrapper;
