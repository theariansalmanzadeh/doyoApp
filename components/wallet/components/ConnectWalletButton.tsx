"use client";
import { Button } from "@mui/material";
import { useWeb3Modal } from "@web3modal/wagmi/react";

const ConnectWalletButton = () => {
  const { open } = useWeb3Modal();

  return (
    <Button
      onClick={() => {
        open();
      }}
      sx={{
        padding: "10px 0px",
        backgroundColor: "sky.200",
        color: "white.100",
        alignSelf: "stretch",
        typography: "subtitle1",
        "&:hover": {
          backgroundColor: "sky.100",
        },
      }}
    >
      Connect Wallet
    </Button>
  );
};

export default ConnectWalletButton;
