"use client";

import { Box, Stack, Typography } from "@mui/material";
import Bnb from "@/assets/images/bnb.png";
import Image from "next/image";
import { useSendTransaction } from "wagmi";
import { parseEther } from "viem";
import { useEffect } from "react";
import { useDoingRequest, useRequestInfos, useRequestSection } from "@/state";

const TxPayment = () => {
  const [, setRequestSection] = useRequestSection();
  const [requestInfos, setRequestInfos] = useRequestInfos();
  const { sendTransaction, isSuccess, error, data } = useSendTransaction();

  useEffect(() => {
    if (isSuccess) {
      setRequestInfos({
        ...requestInfos,
        isPaid: true,
        paymentHash: !!data ? (data as string) : "",
      });
      setRequestSection({ title: "Transaction Submitted", pageNumber: 7 });
    }
  }, [isSuccess, requestInfos, data, setRequestSection, setRequestInfos]);

  return (
    <Box paddingTop="65px" alignSelf="stretch">
      <Typography variant="subtitle1">Bep20 Network</Typography>
      <Stack>
        <Stack
          direction="row"
          sx={{
            paddingY: "10px",
            justifyContent: "space-between",
            "&:hover": { cursor: "pointer", backgroundColor: "white.300" },
          }}
          onClick={() => {
            sendTransaction({
              to: process.env.NEXT_PUBLIC_SOVEREIGN_ADDRESS as `0x${string}`,
              value: parseEther("3.53"),
            });
          }}
        >
          <Stack direction="row" alignItems="center" gap="3px">
            <Image width="42" height="42" src={Bnb} alt="bnb logo" />
            <Box>
              <Typography variant="subtitle1" fontWeight="600">
                BNB
              </Typography>
              <Typography variant="body2" color="gray.100">
                435.43
              </Typography>
            </Box>
          </Stack>
          <Box textAlign="right">
            <Typography variant="body2" fontWeight="600">
              3.53
            </Typography>

            <Typography variant="body2" color="gray.500">
              ~= 1234.88 USD
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default TxPayment;
