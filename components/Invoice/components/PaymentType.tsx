"use client";

import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { dummy_data } from "../content";
import PaymentChoice from "./PaymentChoise";
import { useDoingRequest, useRequestInfos } from "@/state";
import TransactionInvoice from "./TransactionInvoice";

const PaymentType = () => {
  const [doingRequest] = useDoingRequest();
  const [requestInfos] = useRequestInfos();
  return (
    <Box paddingTop="65px">
      <Typography variant="subtitle1">Payment Method</Typography>
      <Stack direction="row" justifyContent="space-between" paddingTop="16px">
        {doingRequest.isPaid ? (
          <TransactionInvoice
            payment={"crypto"}
            isActive={true}
            hash={requestInfos.paymentHash}
          />
        ) : (
          dummy_data.map((data, indx) => (
            <PaymentChoice
              key={indx}
              payment={data.payment}
              isActive={data.isActive}
            />
          ))
        )}
      </Stack>
    </Box>
  );
};

export default PaymentType;
