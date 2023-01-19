import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { Box } from "@components";

const Iconify = ({ size = 28, icon, sx, ...other }) => {
  return (
    <Box
      component={Icon}
      icon={icon}
      sx={{ fontSize: size, ...sx }}
      {...other}
    />
  );
};

Iconify.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
};

export default React.memo(Iconify);
