"use client";

import { useRequestSection } from "@/state";
import AllRequests from "@/components/requests/AllRequests";
import React from "react";
import ProviderList from "@/components/providerList/ProviderList";
import ProviderProfile from "@/components/ProviderProfile/ProviderProfile";
import ProviderContactDetails from "@/components/contactProvider/components/ProviderContactDetails";
import ContactProvider from "@/components/contactProvider/ContactProvider";

const RequestPage = () => {
  const [{ pageNumber }] = useRequestSection();

  switch (pageNumber) {
    case 1:
      return <AllRequests />;
    case 2:
      return <ProviderList />;
    case 3:
      return <ProviderProfile />;
    case 4:
      return <ContactProvider />;
    // case 5:
    //   return <AddAddress />;
    // case 6:
    //   return <RequestSend />;
  }
};

export default RequestPage;
