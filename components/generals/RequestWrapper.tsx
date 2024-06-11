"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useOrderSection, useRequestSection } from "@/state";
import { useRouter } from "next/navigation";
import { displayPageNumber, nextTitle } from "@/lib/generals";

const RequestWrapper = ({ children }: { children: React.ReactNode }) => {
  const [requestSection, setRequestSection] = useRequestSection();
  const router = useRouter();
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        paddingBottom="50px"
        // width={"50%"}
        position="relative"
      >
        <Button
          sx={{ color: "#000" }}
          onClick={() => {
            setRequestSection({
              title: nextTitle(orderSection.title),
              page: pageForward,
            });
          }}
        >
          <ArrowBackIcon />
        </Button>
        <Typography
          sx={{
            position: "absolute",
            top: "0%",
            left: "50%",
            transform: "translate(-50%,0%)",
          }}
          variant="h6"
        >
          {requestSection.title}
        </Typography>
      </Stack>
      {children}
    </>
  );
};

export default RequestWrapper;
