"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const NewRequestBtn = () => {
  const router = useRouter();
  return (
    <Button
      sx={{
        marginTop: "110px",
        backgroundColor: "secondary.100",
        color: "white.100",
        fontSize: "18px",
        paddingY: "8px",
        "&:hover": { backgroundColor: "secondary.dark" },
      }}
      onClick={() => {
        router.push("/order");
      }}
    >
      New Request
    </Button>
  );
};

export default NewRequestBtn;
