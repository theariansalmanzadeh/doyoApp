"use client";
import { Box, Button, InputLabel, Stack, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import search from "@/assets/images/search.png";
import Image from "next/image";

const SearchInput = () => {
  const Input = styled(InputBase)(({ theme }) => ({
    width: "100%",

    "& .MuiInputBase-input": {
      borderRadius: "0px 4px 4px 0px",
      position: "relative",
      backgroundColor: "#edeeee",
      boxShadow: "none",
      fontSize: 16,
      width: "100%",
      padding: "22px 12px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      "&:focus": {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  return (
    <Stack direction="row" alignItems="center">
      <Button
        sx={{
          backgroundColor: "secondary.main",
          padding: "12px",
          borderRadius: "4px 0px 0px 4px",
          "&:hover": { backgroundColor: "secondary.100" },
        }}
      >
        <Image src={search} alt="search Button" width="40" />
      </Button>
      <Input placeholder="Cleaning, Plumbing , Appliance Repair ..." />
    </Stack>
  );
};

export default SearchInput;
