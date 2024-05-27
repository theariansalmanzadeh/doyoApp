"use client";

import { Stack, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Input = ({
  label,
  placeholder,
  onChange = (e) => {},
}: {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) => {
  const InputBaseMui = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
      borderRadius: 8,
      position: "relative",
      backgroundColor: "#edeeee",
      boxShadow: "none",
      fontSize: 16,
      width: "100%",
      padding: "12px 12px",
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
  return (
    <Stack direction="column" alignItems="stretch">
      <Typography variant="subtitle1">{label}</Typography>
      <InputBaseMui onChange={onChange} placeholder={placeholder} />
    </Stack>
  );
};

export default Input;
