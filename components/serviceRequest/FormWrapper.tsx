"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useOrderSection } from "@/state";
import { useRouter } from "next/navigation";
import { displayPageNumber, nextTitle } from "@/lib/generals";

const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  const [orderSection, setOrderSection] = useOrderSection();
  const router = useRouter();
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        paddingBottom="50px"
        width={displayPageNumber(orderSection.title) ? "50%" : "100%"}
      >
        <Button
          sx={{ color: "#000" }}
          onClick={() => {
            let pageForward =
              orderSection.title === "address"
                ? orderSection.page - 2
                : orderSection.page - 1;
            if (orderSection.page === 1) {
              router.push("/");
              return;
            }
            setOrderSection({
              title: nextTitle(orderSection.title),
              page: pageForward,
            });
          }}
        >
          <ArrowBackIcon />
        </Button>
        <Typography
          sx={{
            transform:
              orderSection.title === "success" ||
              orderSection.title === "address"
                ? "translateX(50%)"
                : "translateX(0%)",
          }}
          variant="h6"
        >
          {orderSection.title}
        </Typography>
        {orderSection.title !== "address" &&
          orderSection.title !== "success" && (
            <Typography variant="body2">
              {orderSection.page.toString()}/4
            </Typography>
          )}
      </Stack>
      {children}
    </>
  );
};

export default FormWrapper;
