"use client";

import { displayAddress } from "@/lib/wallet";
import { useRequestSection } from "@/state";
import { Box, Button, Stack, Typography } from "@mui/material";
import userLogo from "@/assets/images/user.png";
import Image from "next/image";

import React, { useEffect } from "react";
import { useAccount, useConnect, useDisconnect, useConnections } from "wagmi";

const WalletDetails = () => {
  const [, setRequestSection] = useRequestSection();
  const {} = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const connections = useConnections();
  const connectorImg = connections[0]?.connector?.icon || userLogo;

  useEffect(() => {
    if (!isConnected) {
      setRequestSection({ title: "Wallet", pageNumber: 6 });
    }
  }, [isConnected, setRequestSection]);

  return (
    <Box
      sx={{
        backgroundColor: "white.600",
        borderRadius: "8px",
        width: "100%",
        padding: "39px 16px 22px 16px",
      }}
    >
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap="5px"
      >
        <Image
          src={connectorImg as string}
          width="65"
          height="65"
          alt="wallet connected logo"
        />
        <Box>
          <Typography variant="subtitle1">Account</Typography>
          <Typography variant="body2">
            for more security please disconnect from your wallet when you are
            not using it!
          </Typography>
        </Box>
      </Stack>
      <Stack direction="row" marginTop="40px" justifyContent="space-between">
        <Button
          variant="outlined"
          sx={{
            color: "alert.critical.100",
            borderColor: "alert.critical.100",
            // flexBasis: "20%",
          }}
          onClick={() => {
            disconnect();
          }}
        >
          Disconnect
        </Button>
        <Typography variant="subtitle1">
          {!!address ? displayAddress(address as string) : ""}
        </Typography>
      </Stack>
    </Box>
  );
};

export default WalletDetails;
