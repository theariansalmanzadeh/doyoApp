import { Stack, Typography } from "@mui/material";
import completed from "@/assets/images/completed.png";
import Image from "next/image";

const SuccessPaid = () => {
  return (
    <Stack
      direction="row"
      gap="5px"
      sx={{ position: "absolute", top: "5%", right: "5%" }}
    >
      <Image src={completed} width="20" alt="success" />
      <Typography color="success">Paid</Typography>
    </Stack>
  );
};

export default SuccessPaid;
