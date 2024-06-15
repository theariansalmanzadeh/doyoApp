import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage } from "wagmi";
import { bscTestnet } from "wagmi/chains";

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

export const config = defaultWagmiConfig({
  chains: [bscTestnet],
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
