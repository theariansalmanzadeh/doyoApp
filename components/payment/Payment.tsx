import { Stack } from "@mui/material";
import React from "react";
import WalletDetails from "./components/WalletDetails";
import TxPayment from "./components/TxPayment";
import DisConnectButton from "./components/DisConnectButton";

const Payment = () => {
  return (
    <Stack alignItems="center">
      <WalletDetails />
      <TxPayment />
      <DisConnectButton />
    </Stack>
  );
};

export default Payment;
