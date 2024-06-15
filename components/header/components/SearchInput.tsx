"use client";
import {
  Box,
  Button,
  InputLabel,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { alpha, styled, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import search from "@/assets/images/search.png";
import Image from "next/image";

const SearchInput = () => {
  const theme = useTheme();
  const isLgDown = useMediaQuery(theme.breakpoints.down("md"));
  const Input = styled(InputBase)(({ theme }) => {
    console.log(isLgDown);

    return {
      "& .MuiInputBase-input": {
        borderRadius: "0px 4px 4px 0px",
        position: "relative",
        backgroundColor: "#edeeee",
        boxShadow: "none",
        fontSize: 16,
        width: isLgDown ? "60vw" : "35vw",
        padding: "25px 12px",
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
    };
  });
  return (
    <Stack
      direction="row"
      alignItems="center"
      zIndex={100}
      sx={{
        position: "absolute",
        top: { xs: "110%", md: "50%" },
        right: { xs: "50%", md: "10%" },
        transform: { xs: "translate(50%,-50%)", md: "translate(0%,0%)" },
      }}
    >
      <Button
        sx={{
          backgroundColor: "secondary.main",
          padding: "17px",
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
