"use client";

import Input from "@/components/generals/input/Input";
import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";

const FormInput = () => {
  const [inputSug, setInputSug] = useState("");
  const suggestions = ["Cleaning", "Electrical", "Car Service"];
  return (
    <Stack flexBasis="50%" gap="20px" alignItems="stretch">
      <Stack direction="row" gap="15px">
        <Input label="Name" placeholder="First Name" />
        <Box sx={{ flexGrow: "1" }}>
          <Input label="last Name" placeholder="Last Name" />
        </Box>
      </Stack>
      <Input label="Email" placeholder="Email" />
      <Input label="Your Service" placeholder="Search" />
      <Stack direction="row" gap="10px">
        {suggestions.map((item) => (
          <Box
            key={item}
            sx={{
              padding: "2px 10px",
              cursor: "pointer",
              backgroundColor: "#edeeee",
              borderRadius: "4px",
            }}
            onClick={() => {
              setInputSug(item);
            }}
          >
            {item}
          </Box>
        ))}
      </Stack>
      <Button
        sx={{
          backgroundColor: "secondary.main",
          color: "#fff",
          padding: "10px 0px",
          "&:hover": { backgroundColor: "secondary.100" },
        }}
      >
        Submit
      </Button>
    </Stack>
  );
};

export default FormInput;
