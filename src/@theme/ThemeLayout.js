import React from "react";
import { Box } from "@components";
import { SettingsContext } from "@context";
import "../index.scss";
import { createTheme, ThemeProvider } from "@mui/material";
import { useSelector } from "@store";

const ThemeProvide = ({ children }) => {
  const { mode } = useSelector((state) => state.users);
  const [search, setSearch] = React.useState("");
  const [toggle, setToggle] = React.useState(false);
  const [loginModal, setLoginModal] = React.useState(false);

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const updateSearch = (val) => {
    setSearch(val);
  };

  return (
    <SettingsContext.Provider
      value={{
        search,
        setSearch,
        updateSearch,
        toggle,
        setToggle,
        loginModal,
        setLoginModal,
      }}
    >
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: "100vw",
            bgcolor: "background.default",
            color: "text.primary",
          }}
        >
          {children}
        </Box>
      </ThemeProvider>
    </SettingsContext.Provider>
  );
};

export default React.memo(ThemeProvide);
