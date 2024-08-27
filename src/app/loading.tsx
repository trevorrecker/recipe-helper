"use client";

import { Box, CircularProgress } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Loading: React.FC<Props> = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
