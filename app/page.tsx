import Services from "@/components/services/Services";
import Header from "@/components/header/Header";
import Image from "next/image";
import Blogs from "@/components/Blogs";
import Contact from "@/components/contact/Contact";
import MobileApp from "@/components/MobileApp";
import Footer from "@/components/footer/Footer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box minHeight="100vh">
      <Header />
      <Services />
      <MobileApp />
      <Contact />
      <Blogs />
      <Footer />
    </Box>
  );
}
