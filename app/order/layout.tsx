"use client";

import FormWrapper from "@/components/serviceRequest/FormWrapper";
import TimeModal from "@/components/serviceRequest/whenForm/components/TimeModal";
import { Box, Stack } from "@mui/material";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack alignItems="center" justifyContent="center">
      <TimeModal />
      <Box width="25%" sx={{ marginY: "50px" }}>
        <FormWrapper>{children}</FormWrapper>
      </Box>
    </Stack>
  );
};

export default layout;
