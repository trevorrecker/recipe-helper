import React from "react";
import WhiskIcon from "@/assets/recipe-helper-whisk-star.svg";
import { Box, BoxProps } from "@mui/material";

const Logo: React.FC<BoxProps> = (delegate) => {
  return (
    <Box width={40} height={40} {...delegate}>
      <WhiskIcon width="" height="" />
    </Box>
  );
};

export default Logo;
