import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <Box padding={{ xs: "100px 25px", lg: "40px 200px" }}>
      <Typography variant="h6" marginBottom="10px">
        Latest news & blogs
      </Typography>
      <Stack
        direction="row"
        flexWrap={{ xs: "wrap" }}
        gap={{ xs: "25px", md: "50px" }}
      >
        <Stack alignItems="center" gap="10px">
          <Link href="/tokenomics">
            <Box
              sx={{
                backgroundColor: "#edeeee",
                width: "150px",
                height: "150px",
              }}
            />
          </Link>
          <Link href="/tokenomics">
            <Typography variant="caption" fontWeight="bold" color="#909090">
              tokenomics
            </Typography>
          </Link>
        </Stack>
        <Stack alignItems="center" gap="10px">
          <Link href="/blog-2">
            <Box
              sx={{
                backgroundColor: "#edeeee",
                width: "150px",
                height: "150px",
              }}
            />
          </Link>
          <Link href="/blog-2">
            <Typography variant="caption" fontWeight="bold" color="#909090">
              Blog 2
            </Typography>
          </Link>
        </Stack>
        <Stack alignItems="center" gap="10px">
          <Link href="/blog-3">
            <Box
              sx={{
                backgroundColor: "#edeeee",
                width: "150px",
                height: "150px",
              }}
            />
          </Link>
          <Link href="/blog-3">
            <Typography variant="caption" fontWeight="bold" color="#909090">
              Blog 3
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Blogs;
