import React from "react";
import { Icon } from "@iconify/react";
import { Box } from "@components";

const Iconify = ({ size = 28, icon, sx, ...other }) => {
  return (
    <Box
      component={Icon}
      icon={icon}
      sx={{ fontSize: size, mx: 0.5, ...sx }}
      {...other}
    />
  );
};

export default React.memo(Iconify);
