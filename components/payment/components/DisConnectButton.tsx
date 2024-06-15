"use client";

import { useRequestSection } from "@/state";
import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

const DisConnectButton = () => {
  const [, setRequestSection] = useRequestSection();
  const { disconnect } = useDisconnect();
  const { isConnected } = useAccount();

  useEffect(() => {
    if (!isConnected) {
      setRequestSection({ title: "Wallet", pageNumber: 6 });
    }
  }, [isConnected, setRequestSection]);
  return (
    <Button
      onClick={() => {
        setRequestSection({ title: "Wallet", pageNumber: 6 });
        disconnect();
      }}
      sx={{
        backgroundColor: "alert.critical.100",
        color: "white.100",
        alignSelf: "stretch",
        marginTop: "65px",
        paddingY: "10px",
        "&:hover": { backgroundColor: "alert.critical.200" },
      }}
    >
      DisConnect
    </Button>
  );
};

export default DisConnectButton;
