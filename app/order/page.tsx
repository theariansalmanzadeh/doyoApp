"use client";

import AddAddress from "@/components/addAddress/AddAddress";
import RequestSend from "@/components/requestSend/RequestSend";
import WhatForm from "@/components/serviceRequest/whatForm/WhatForm";
import WhenForm from "@/components/serviceRequest/whenForm/WhenForm";
import WhereForm from "@/components/serviceRequest/whereForm/WhereForm";
import Summary from "@/components/summary/Summary";
import { useOrderSection } from "@/state";

const OrderPage = () => {
  const [orderSection, setOrderSection] = useOrderSection();
  switch (orderSection.page) {
    case 1:
      return <WhatForm />;
    case 2:
      return <WhenForm />;
    case 3:
      return <WhereForm />;
    case 4:
      return <Summary />;
    case 5:
      return <AddAddress />;
    case 6:
      return <RequestSend />;
  }
  return "OrderPage";
};

export default OrderPage;
