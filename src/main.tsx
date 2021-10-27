import "./styles/index.scss";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a39391",
    },
    secondary: {
      main: "#e79686",
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
