import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { Box } from "@constants";

const Iconify = ({ icon, sx, ...other }) => {
  return (
    <Box component={Icon} icon={icon} sx={{ fontSize: 28, ...sx }} {...other} />
  );
};

Iconify.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
};

export default React.memo(Iconify);
