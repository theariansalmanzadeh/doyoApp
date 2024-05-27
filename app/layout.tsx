import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import StyleProvider from "@/components/generals/Styleprovider";
import HomeLayout from "@/components/generals/Homelayout";
import Navbar from "@/components/navbar/Navbar";
import "../node_modules/leaflet/dist/leaflet.css";
import Menu from "@/components/sideMenu/Menu";

export const metadata: Metadata = {
  title: "Doyo app",
  description: "All services available",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <StyleProvider>
            <Navbar />
            <Menu />
            {children}
          </StyleProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
