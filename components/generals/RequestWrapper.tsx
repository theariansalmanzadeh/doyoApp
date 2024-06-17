"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRequestSection } from "@/state";
import { useRouter } from "next/navigation";
import { requestBackwardSection } from "@/lib/generals";
import { TRequestTitle } from "@/types";

const RequestWrapper = ({ children }: { children: React.ReactNode }) => {
  const [requestSection, setRequestSection] = useRequestSection();
  const router = useRouter();
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        paddingBottom="50px"
        position="relative"
      >
        <Button
          sx={{ color: "#000" }}
          onClick={() => {
            const section = requestBackwardSection(requestSection);
            if (typeof section === "string" && section === "home") {
              router.push("/");
            } else {
              if (!!section)
                setRequestSection({
                  title: section.title as TRequestTitle,
                  pageNumber: section?.pageNumber,
                });
            }
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
