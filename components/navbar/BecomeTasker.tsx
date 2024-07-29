import { useElementTasker } from "@/state";
import { Button } from "@mui/material";
import React from "react";

const BecomeTasker = () => {
  const [taskerRef] = useElementTasker();
  return (
    <Button
      sx={{
        color: "#eee",
        backgroundColor: "secondary.main",
        borderRadius: "8px",
        fontWeight: "small",
      }}
      onClick={() => taskerRef.current.scrollIntoView()}
    >
      Become a Tasker
    </Button>
  );
};

export default BecomeTasker;
