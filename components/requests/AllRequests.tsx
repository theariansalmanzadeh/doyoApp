"use client";

import SearchInput from "./components/SearchInput";
import { Stack } from "@mui/material";
import React from "react";
import RequestBox from "../generals/requests/RequestBox";
import NewRequestBtn from "./components/NewRequestBtn";
import { useRequestInfos, useRequestSection, useRequests } from "@/state";

const Requests = () => {
  const [, setRequestSection] = useRequestSection();
  const [, setRequestInfos] = useRequestInfos();
  const [requests] = useRequests();
  return (
    <Stack sx={{ width: "100%", gap: "24px" }}>
      <SearchInput />

      {requests.map((request) => (
        <Stack
          key={request.number}
          onClick={() => {
            setRequestInfos({
              service: request.title,
              orderNumber: request.number,
              timeOrder: request.orderTime,
              isPaid: false,
              paymentHash: "",
            });
            if (request.state === "Accepted")
              setRequestSection({ title: "provider list", pageNumber: 2 });
            else if (request.state === "Doing")
              setRequestSection({ title: "Invoice", pageNumber: 5 });
          }}
        >
          <RequestBox
            title={request.title}
            timeOrder={request.orderTime}
            state={request.state}
            orderNumber={request.number}
          />
        </Stack>
      ))}

      <NewRequestBtn />
    </Stack>
  );
};

export default Requests;
