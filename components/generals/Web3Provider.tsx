"use client";
import { config } from "@/config/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import React, { ReactNode } from "react";
import { State, WagmiProvider } from "wagmi";

const Web3Provider = ({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: State;
}) => {
  // Setup queryClient
  const queryClient = new QueryClient();

  createWeb3Modal({
    wagmiConfig: config,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
    enableOnramp: true, // Optional - false as default
  });
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};

export default Web3Provider;
