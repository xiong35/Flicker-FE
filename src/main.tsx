import "./styles/index.scss";

import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0F4C3A",
    },
    secondary: {
      main: "#EBB471",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
