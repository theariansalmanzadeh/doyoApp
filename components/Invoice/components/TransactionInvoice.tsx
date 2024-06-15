import { Stack, Typography } from "@mui/material";
import React from "react";
import PaymentChoice from "./paymentChoise";
import { displayAddress } from "@/lib/wallet";
import Link from "next/link";

const TransactionInvoice = ({
  payment,
  isActive,
  hash,
}: {
  payment: string;
  isActive: boolean;
  hash: string;
}) => {
  return (
    <>
      {" "}
      <PaymentChoice payment={payment} isActive={isActive} />
      <Link href={`https://testnet.bscscan.com/tx/${hash}`}>
        <Typography> TxID: {displayAddress(hash)}</Typography>
      </Link>
    </>
  );
};

export default TransactionInvoice;
