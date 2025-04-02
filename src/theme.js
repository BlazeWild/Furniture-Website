import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#8c785a",
    },
    secondary: {
      main: "#5a4a2f",
    },
    background: {
      default: "#ffffff",
      paper: "#f8f4ea",
      footer: "#ece6ca",
      navbar: "#ece6ca",
    },
    text: {
      primary: "#333333",
      secondary: "#5a4a2f",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#bead99",
    },
    secondary: {
      main: "#d1c5b4",
    },
    background: {
      default: "#222222",
      paper: "#0a0a0a",
      footer: "#111111",
      navbar: "#111111",
      hero: "#222222",
    },
    text: {
      primary: "#e0e0e0",
      secondary: "#bead99",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
    },
  },
});
