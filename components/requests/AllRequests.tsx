"use client";

import SearchInput from "./components/SearchInput";
import { Stack } from "@mui/material";
import React from "react";
import RequestBox from "../generals/requests/RequestBox";
import NewRequestBtn from "./components/NewRequestBtn";
import { useRequestInfos, useRequestSection } from "@/state";

const Requests = () => {
  const [, setRequestSection] = useRequestSection();
  const [, setRequestInfos] = useRequestInfos();
  return (
    <Stack sx={{ width: "100%", gap: "24px" }}>
      <SearchInput />
      <RequestBox
        title={"cleaning"}
        timeOrder={3}
        state="Pending"
        orderNumber={434357}
      />
      <Stack
        onClick={() => {
          setRequestInfos({
            service: "cleaning",
            orderNumber: 434357,
            timeOrder: 3,
          });
          setRequestSection({ title: "provider list", pageNumber: 2 });
        }}
      >
        <RequestBox
          title={"cleaning"}
          timeOrder={3}
          state="Accepted"
          orderNumber={434357}
        />
      </Stack>
      <NewRequestBtn />
    </Stack>
  );
};

export default Requests;
