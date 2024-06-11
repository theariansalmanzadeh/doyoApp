"use client";

import { Box, Stack, Typography } from "@mui/material";
import star from "@/assets/images/star.png";
import { dummy_providers } from "../content";
import Image from "next/image";
import React from "react";
import { useProfileInfo, useRequestSection } from "@/state";

const ServiceProviderList = () => {
  const [, setRequestSection] = useRequestSection();
  const [, setProfileInfo] = useProfileInfo();
  function displayStars() {
    let starArray = [];
    for (let i = 0; i < 5; i++) {
      starArray.push(
        <Image
          src={star}
          width="10"
          height="10"
          alt="service provider"
          style={{ borderRadius: "50%" }}
        />
      );
    }
    return starArray;
  }
  return (
    <Stack paddingTop="34px">
      <Typography variant="subtitle1">Select Service provider</Typography>
      <Stack direction="column">
        {dummy_providers.map((provider) => (
          <Stack
            key={provider.name}
            direction="row"
            justifyContent="space-between"
            marginTop="35px"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              setProfileInfo({
                name: provider.name,
                votes: +provider.votes,
                wage: +provider.wage,
                imgUrl: provider.imgUrl,
              });
              setRequestSection({ title: "Provider Profile", pageNumber: 3 });
            }}
          >
            <Stack direction="row" gap="10px">
              <Image
                src={provider.imgUrl}
                width="40"
                alt="service provider"
                style={{ borderRadius: "50%" }}
              />
              <Stack>
                <Typography variant="body2">{provider.name}</Typography>
                <Stack direction="row" gap="2px" alignItems="start">
                  {displayStars()}
                  <Typography color="#909090" fontSize="10px" lineHeight="18px">
                    ({provider.votes})
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Typography variant="subtitle1">${provider.wage}/hour</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default ServiceProviderList;
