"use client";

import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { bodyMenuItems } from "../content";
import Link from "next/link";
import {
  useElementTasker,
  useIsMenuOpen,
  useIsScroll,
  useOrderSection,
  useRequestSection,
} from "@/state";
import { hasLink, isRequestSection, sectionHandler } from "@/lib/generals";
import { TOrderSection, TRequestTitle } from "@/types";
import { useRouter } from "next/navigation";

const BodyMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useIsMenuOpen();
  const [taskerRef] = useElementTasker();
  const router = useRouter();
  const [isScroll, setIsScroll] = useIsScroll();
  const [, setOrderSection] = useOrderSection();
  const [, setRequestSection] = useRequestSection();

  return (
    <Stack padding="40px 0px 0px 20px" gap="40px">
      {bodyMenuItems.map((item) => (
        <Link key={item.label} href="/">
          <Stack
            direction="row"
            gap="10px"
            onClick={() => {
              const isRequestPage = isRequestSection(item.label);
              const section = sectionHandler(item.label);

              console.log(section, isRequestPage, hasLink(item.label));

              if (!!section)
                isRequestPage
                  ? setRequestSection({
                      title: section?.title as TRequestTitle,
                      pageNumber: section.number,
                    })
                  : setOrderSection({
                      title: section?.title as TOrderSection,
                      page: section.number,
                    });
              setIsMenuOpen(false);
            }}
          >
            {hasLink(item.label) ? (
              <Link
                href={isRequestSection(item.label) ? "/requests" : "/order"}
              >
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
