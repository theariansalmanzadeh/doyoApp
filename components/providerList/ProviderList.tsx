import { Box, Stack } from "@mui/material";
import React from "react";
import RequestDetails from "./components/RequestDetails";

import ServiceProviderList from "./components/ServiceProviderList";
import SumWrapper from "../generals/SumWrapper";

const ProviderList = () => {
  return (
    <Stack>
      <RequestDetails timeOrder={5} title="cleaning" state="Accepted" />
      <SumWrapper />
      <ServiceProviderList />
    </Stack>
  );
};

export default ProviderList;
