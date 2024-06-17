import { Box, LinearProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      zIndex="100"
      position="fixed"
      top="0"
      right="0"
      bottom="0"
      sx={{
        backgroundColor: "RGBA(203,203,203,0.32)",
      }}
    >
      <LinearProgress color="primary" sx={{ height: "6px" }} />
    </Box>
  );
};

export default Loading;
