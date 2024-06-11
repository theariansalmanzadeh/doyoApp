import { Stack } from "@mui/material";
import React from "react";
import ProfileSummary from "./components/ProfileSummary";
import Experiences from "./components/Experiences";
import Gallery from "./components/Gallery";
import ActionButton from "./components/ActionButton";
import Reviews from "./components/Reviews";

const ProviderProfile = () => {
  return (
    <Stack direction="column">
      <ProfileSummary />
      <Experiences />
      <Gallery />
      <Reviews />
      <ActionButton />
    </Stack>
  );
};

export default ProviderProfile;
