import { Stack, Typography } from "@mui/material";
import React from "react";
import SumWrapper from "../generals/SumWrapper";
import ProviderContactDetails from "./components/ProviderContactDetails";
import ActionButtons from "./components/ActionButtons";

const ContactProvider = () => {
  return (
    <Stack>
      <SumWrapper />
      <ProviderContactDetails />
      <ActionButtons />
    </Stack>
  );
};

export default ContactProvider;
