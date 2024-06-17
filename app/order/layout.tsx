import FormWrapper from "@/components/serviceRequest/FormWrapper";
import TimeModal from "@/components/serviceRequest/whenForm/components/TimeModal";
import { Box, Stack } from "@mui/material";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack alignItems="center" justifyContent="center">
      <TimeModal />
      <Box
        width={{ xxs: "90%", sm: "90%", md: "50%", lg: "30%" }}
        sx={{ marginY: "50px" }}
      >
        <FormWrapper>{children}</FormWrapper>
      </Box>
    </Stack>
  );
};

export default layout;
