"use client";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const InputTemplate = () => {
  const InputBaseMui = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 8,
      position: "relative",
      backgroundColor: "transparent",
      boxShadow: "none",
      fontSize: 16,
      width: "100%",
      padding: "4px 12px",
      // border: "1px solid",
      // borderColor: theme.palette.primary.main,
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

  return InputBaseMui;
};

export default InputTemplate;
