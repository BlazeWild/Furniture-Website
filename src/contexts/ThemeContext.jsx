import React, { createContext, useState, useContext, useEffect } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../theme";

// Create a context for theme
const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
  theme: lightTheme,
  mode: "light",
});

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Check if there's a saved theme preference in localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    console.log("Initial theme from localStorage:", savedTheme);
    return savedTheme === "true";
  });

  // Toggle between light and dark themes
  const toggleTheme = () => {
    console.log("toggleTheme called, current isDarkMode:", isDarkMode);
    setIsDarkMode((prev) => {
      const newMode = !prev;
      console.log("Setting new dark mode to:", newMode);
      return newMode;
    });
  };

  // Current mode as string
  const mode = isDarkMode ? "dark" : "light";

  // Save theme preference to localStorage when it changes
  useEffect(() => {
    console.log("Theme changed, updating, isDarkMode:", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);

    // Set data-theme attribute on body
    document.body.setAttribute("data-theme", mode);
    console.log("Set data-theme on body to:", mode);

    // Set CSS variables for use in CSS files
    const root = document.documentElement;
    if (isDarkMode) {
      // Dark theme variables
      root.style.setProperty(
        "--background-dark-default",
        darkTheme.palette.background.default
      );
      root.style.setProperty(
        "--background-dark-paper",
        darkTheme.palette.background.paper
      );
      root.style.setProperty(
        "--background-dark-footer",
        darkTheme.palette.background.footer
      );
      root.style.setProperty(
        "--hero-dark-background",
        "linear-gradient(to right, #1e1e1e, #2a2a2a)"
      );
      root.style.setProperty(
        "--text-dark-primary",
        darkTheme.palette.text.primary
      );
      root.style.setProperty(
        "--text-dark-secondary",
        darkTheme.palette.text.secondary
      );
      root.style.setProperty(
        "--primary-dark-main",
        darkTheme.palette.primary.main
      );
      root.style.setProperty(
        "--secondary-dark-main",
        darkTheme.palette.secondary.main
      );
      root.style.setProperty("--card-dark-gradient-start", "#2c2c2c");
      root.style.setProperty("--card-dark-gradient-end", "#1a1a1a");
      root.style.setProperty("--content-dark-gradient-start", "#1a1a1a");
      root.style.setProperty("--content-dark-gradient-end", "#212121");
      root.style.setProperty(
        "--price-dark-gradient-start",
        darkTheme.palette.primary.main
      );
      root.style.setProperty(
        "--price-dark-gradient-end",
        darkTheme.palette.secondary.main
      );
    } else {
      // Light theme variables
      root.style.setProperty(
        "--background-default",
        lightTheme.palette.background.default
      );
      root.style.setProperty(
        "--background-paper",
        lightTheme.palette.background.paper
      );
      root.style.setProperty(
        "--background-footer",
        lightTheme.palette.background.footer
      );
      root.style.setProperty(
        "--hero-background",
        "linear-gradient(to right, #ffffff, #f8f8f8)"
      );
      root.style.setProperty("--text-primary", lightTheme.palette.text.primary);
      root.style.setProperty(
        "--text-secondary",
        lightTheme.palette.text.secondary
      );
      root.style.setProperty("--primary-main", lightTheme.palette.primary.main);
      root.style.setProperty(
        "--secondary-main",
        lightTheme.palette.secondary.main
      );
      root.style.setProperty("--card-gradient-start", "#f5f0e5");
      root.style.setProperty("--card-gradient-end", "#f0e9d7");
      root.style.setProperty("--content-gradient-start", "#f0e9d7");
      root.style.setProperty("--content-gradient-end", "#f8f4ea");
      root.style.setProperty(
        "--price-gradient-start",
        lightTheme.palette.primary.main
      );
      root.style.setProperty(
        "--price-gradient-end",
        lightTheme.palette.secondary.main
      );
    }
  }, [isDarkMode, mode]);

  // Choose the current theme based on isDarkMode
  const theme = isDarkMode ? darkTheme : lightTheme;

  // Provide the theme context and wrap with MUI's ThemeProvider
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme, mode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
