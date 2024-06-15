import { Box, Button, Stack, Typography } from "@mui/material";
import successful from "@/assets/images/verified-green.png";
import { styleBtn } from "@/app/styles/Inputbutton";
import Image from "next/image";
import { useRequestSection } from "@/state";

const SuccessTransaction = () => {
  const [, setRequestSection] = useRequestSection();
  return (
    <Stack alignItems="center" justifyItems="center" justifyContent="center">
      <Stack
        alignItems="center"
        justifyItems="center"
        justifyContent="center"
        gap="20px"
      >
        <Image src={successful} width="100" alt="success" />
        <Typography variant="h5">Transaction has been done</Typography>
      </Stack>
      <Box sx={{ marginTop: "50px" }}>
        <Button
          sx={{ ...styleBtn, marginTop: "30px", width: "100%" }}
          onClick={() => {
            setRequestSection({ title: "Invoice", pageNumber: 5 });
          }}
        >
          INVOICE DETAIL
        </Button>
      </Box>
    </Stack>
  );
};

export default SuccessTransaction;
