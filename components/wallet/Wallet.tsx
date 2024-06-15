"use client";

import { Box, Stack, Typography } from "@mui/material";
import Metamask from "@/assets/images/MetaMask 1.png";
import Image from "next/image";
import ConnectWalletButton from "./components/ConnectWalletButton";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { useRequestSection } from "@/state";

const Wallet = () => {
  const { address } = useAccount();
  const [, setRequestSection] = useRequestSection();

  useEffect(() => {
    if (address) setRequestSection({ title: "Payment", pageNumber: 7 });
  }, [address, setRequestSection]);

  if (address) {
    setRequestSection({ title: "Payment", pageNumber: 7 });
  }
  return (
    <Stack alignItems="center" width="100%">
      <Stack alignItems="center" padding="85px 0px 27px 0px">
        <Image src={Metamask} width="105" alt="metamask logo" />
        <Typography variant="body1">
          Your WEB3 wallet is not connected
        </Typography>
      </Stack>
      <ConnectWalletButton />
    </Stack>
  );
};

export default Wallet;
