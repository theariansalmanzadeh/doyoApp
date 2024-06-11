import { useRequestSection } from "@/state";
import { Button } from "@mui/material";
import React from "react";

const ActionButton = () => {
  const [, setRequestSection] = useRequestSection();
  return (
    <Button
      sx={{
        marginTop: "30px",
        padding: "10px 0px",
        backgroundColor: "secondary.main",
        color: "white.100",
      }}
      onClick={() => {
        setRequestSection({ title: "Provider Profile", pageNumber: 4 });
      }}
    >
      Accept
    </Button>
  );
};

export default ActionButton;
