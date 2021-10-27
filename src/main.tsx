import "./styles/index.scss";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e79686",
    },
    secondary: {
      main: "#a39391",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
