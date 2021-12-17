import "./styles/index.scss";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import App from "./App";
import { store } from "./redux/store";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#0F4C3A",
//     },
//     secondary: {
//       main: "#EBB471",
//     },
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
