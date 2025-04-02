import React from "react";
import { IconButton, useTheme as useMuiTheme, Tooltip } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";

const ThemeToggleButton = () => {
  const muiTheme = useMuiTheme();
  const { isDarkMode, toggleTheme } = useTheme();

  // Add this for debugging
  const handleToggle = () => {
    console.log("Current theme mode before toggle:", isDarkMode);
    toggleTheme();
    console.log("Toggle theme function called");
  };

  return (
    <Tooltip
      title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <IconButton
          onClick={handleToggle}
          sx={{
            backgroundColor: isDarkMode
              ? "rgba(255, 255, 255, 0.12)"
              : "rgba(0, 0, 0, 0.08)",
            color: isDarkMode
              ? muiTheme.palette.primary.main
              : muiTheme.palette.primary.main,
            width: 40,
            height: 40,
            borderRadius: "50%",
            transition: "all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)",
            "&:hover": {
              backgroundColor: isDarkMode
                ? "rgba(255, 255, 255, 0.2)"
                : "rgba(0, 0, 0, 0.12)",
            },
          }}
        >
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </motion.div>
    </Tooltip>
  );
};

export default ThemeToggleButton;
