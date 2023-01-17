import React from "react";
import { Box } from "@constants";
import { SettingsContext } from "@context";

const ThemeProvide = ({ children }) => {
  const [config, setConfig] = React.useState({
    mode: "light",
    toggle: false,
  });

  const configUpdate = (conf) => {
    setConfig({
      ...config,
      conf,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        config,
        configUpdate,
      }}
    >
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
        }}
      >
        {children}
      </Box>
    </SettingsContext.Provider>
  );
};

export default React.memo(ThemeProvide);
