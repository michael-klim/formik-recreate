import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import {
  createMuiTheme,
  ThemeProvider as MUIThemeProvider
} from "@material-ui/core/styles";
import App from "./App";

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10
  }
});

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
  }

`;

ReactDOM.render(
  <>
    <MUIThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </MUIThemeProvider>
  </>,
  document.getElementById("root")
);
