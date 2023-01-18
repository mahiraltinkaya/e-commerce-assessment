import React from "react";
import { Box } from "@components";
import { SettingsContext } from "@context";
import "../index.scss";

const ThemeProvide = ({ children }) => {
  const [config, setConfig] = React.useState({
    mode: "light",
    toggle: false,
  });

  const [search, setSearch] = React.useState("");

  const configUpdate = (conf) => {
    setConfig({
      ...config,
      conf,
      search,
      setSearch,
    });
  };

  const updateSearch = (val) => {
    setSearch(val);
  };

  return (
    <SettingsContext.Provider
      value={{
        config,
        configUpdate,
        search,
        setSearch,
        updateSearch,
      }}
    >
      <Box
        sx={{
          width: "100vw",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        {children}
      </Box>
    </SettingsContext.Provider>
  );
};

export default React.memo(ThemeProvide);
