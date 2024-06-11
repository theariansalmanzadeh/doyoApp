"use client";

import {
  useDoingRequest,
  useProfileInfo,
  useRequestInfos,
  useRequestSection,
} from "@/state";
import { Box, Button, Stack } from "@mui/material";
import React from "react";

const ActionButtons = () => {
  const [, setRequestSection] = useRequestSection();
  const [profileInfo] = useProfileInfo();
  const [requestInfos] = useRequestInfos();
  const [, setDoingRequest] = useDoingRequest();
  return (
    <Stack
      direction="row"
      gap="16px"
      justifyContent="space-between"
      marginTop="140px"
    >
      <Button
        sx={{
          flexBasis: "30%",
          bgcolor: "alert.critical.100",
          color: "white.100",
        }}
        onClick={() => {
          setRequestSection({ title: "provider list", pageNumber: 2 });
        }}
      >
        Cancel
      </Button>
      <Button
        sx={{ flexGrow: "1", bgcolor: "secondary.main", color: "white.100" }}
        onClick={() => {
          setDoingRequest({
            serviceProvider: profileInfo.name,
            imgUrl: profileInfo.imgUrl,
            orderNumber: requestInfos.orderNumber,
            serviceType: requestInfos.service,
            data: Date(),
          });
          setRequestSection({ title: "My Requests", pageNumber: 1 });
        }}
      >
        Done
      </Button>
    </Stack>
  );
};

export default ActionButtons;
