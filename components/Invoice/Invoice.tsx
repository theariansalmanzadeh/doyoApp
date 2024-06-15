import { useDoingRequest, useRequestInfos } from "@/state";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import PromotCode from "./components/PromotCode";
import PaymentType from "./components/PaymentType";
import ActionButton from "./components/ActionButton";
import TableContent from "./components/TableContent";
import SuccessPaid from "./components/SuccessPiad";

const Invoice = () => {
  const [requestInfos] = useRequestInfos();
  const [{ isPaid }] = useDoingRequest();
  return (
    <Stack margin="60px 0x 34px 0px">
      {isPaid && <SuccessPaid />}
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" gap="3px">
          <Typography variant="subtitle1">{requestInfos.service}</Typography>
          <Typography variant="body2" color="#909090">
            No #{requestInfos.orderNumber}
          </Typography>
        </Stack>
        <Typography variant="subtitle1">$ 197.43</Typography>
      </Stack>
      <TableContent />

      <PromotCode />
      <PaymentType />
      <ActionButton />
    </Stack>
  );
};

export default Invoice;
