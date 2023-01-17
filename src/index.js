import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persisted } from "@store/index";

import { ThemeProvider, theme } from "@theme";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@constants";
import { RouterProvider } from "react-router-dom";
import router from "@router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persisted}>
        <CssBaseline></CssBaseline>
        <ThemeProvider theme={theme}>
          <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
            <RouterProvider router={router} />
            <App />
          </Box>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
