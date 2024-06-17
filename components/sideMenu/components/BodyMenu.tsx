"use client";

import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { bodyMenuItems } from "../content";
import Link from "next/link";
import { useIsMenuOpen } from "@/state";

const BodyMenu = () => {
  const [, setIsMenuOpen] = useIsMenuOpen();
  return (
    <Stack padding="40px 0px 0px 20px" gap="40px">
      {bodyMenuItems.map((item) => (
        <Link key={item.label} href="/">
          <Stack
            direction="row"
            gap="10px"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            {item.label === "Requests" ? (
              <Link href="/requests">
                <item.icon />
                <Typography
                  variant="body1"
                  sx={{ display: "inline-block", paddingLeft: "10px" }}
                >
                  {item.label}
                </Typography>
              </Link>
            ) : (
              <>
                <item.icon />
                <Typography
                  variant="body1"
                  sx={{ display: "inline-block", paddingLeft: "0px" }}
                >
                  {item.label}
                </Typography>
              </>
            )}
          </Stack>
        </Link>
      ))}
    </Stack>
  );
};

export default BodyMenu;
