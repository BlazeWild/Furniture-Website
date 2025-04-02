import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme as useMuiTheme,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useMuiTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/categories" },
    { label: "About", path: "/", scrollTo: "about" },
    { label: "Contact", path: "/", scrollTo: "contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path, scrollTo) => {
    if (scrollTo) {
      // If we're not on the home page, navigate there first
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(scrollTo);
          if (element) {
            const yOffset = -80;
            const y =
              element.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.getElementById(scrollTo);
        if (element) {
          const yOffset = -80;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    } else {
      navigate(path);
    }
  };

  const isActive = (item) => {
    if (item.scrollTo) {
      return (
        location.pathname === "/" &&
        window.location.hash === `#${item.scrollTo}`
      );
    }
    return location.pathname === item.path;
  };

  const drawer = (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.background.paper,
        position: "relative",
        p: 3,
        "& *:focus": {
          outline: "none",
        },
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          right: 16,
          top: 16,
          color: theme.palette.text.primary,
          fontSize: "2rem",
          width: 48,
          height: 48,
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, 0.05)"
              : "rgba(0, 0, 0, 0.05)",
          "&:hover": {
            backgroundColor:
              theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(0, 0, 0, 0.1)",
          },
          "&:focus": {
            outline: "none",
          },
        }}
        onClick={handleDrawerToggle}
      >
        ×
      </IconButton>
      <Box sx={{ mt: 6 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
          <Box
            component="img"
            src="/logo.png"
            alt="Furnish Logo"
            sx={{
              height: 30,
              marginRight: 1,
              display: "block",
              borderRadius: "50%",
            }}
          />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              color: theme.palette.text.primary,
              textDecoration: "none",
              fontWeight: "bold",
            }}
            onClick={handleDrawerToggle}
          >
            DHURBA FURNITURE
          </Typography>
        </Box>
        <List
          sx={{
            borderRadius: 2,
            overflow: "hidden",
            boxShadow:
              theme.palette.mode === "dark"
                ? "0 4px 12px rgba(255, 255, 255, 0.05)"
                : "0 4px 12px rgba(0, 0, 0, 0.05)",
          }}
        >
          {navItems.map((item) => (
            <ListItem
              key={item.label}
              component={Link}
              to={item.path}
              onClick={() => {
                handleDrawerToggle();
                handleNavigation(item.path, item.scrollTo);
              }}
              sx={{
                backgroundColor: isActive(item)
                  ? theme.palette.mode === "dark"
                    ? "rgba(255, 255, 255, 0.04)"
                    : "rgba(0, 0, 0, 0.04)"
                  : "transparent",
                mb: 0,
                textDecoration: "none",
                transition: "background-color 0.2s ease",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(0, 0, 0, 0.08)",
                },
                "&:focus": {
                  outline: "none",
                },
              }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  color: theme.palette.text.primary,
                  "& .MuiTypography-root": {
                    fontWeight: isActive(item) ? "bold" : "normal",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>

        <Box
          sx={{
            mt: 4,
            p: 2,
            backgroundColor:
              theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.05)"
                : "#f8f8f8",
            borderRadius: 2,
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "bold",
              mb: 1,
              color: theme.palette.text.primary,
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              mb: 2,
            }}
          >
            DHURBA FURNITURE provides premium quality furniture with elegant
            designs and exceptional comfort.
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "bold",
              mb: 1,
              color: theme.palette.text.primary,
            }}
          >
            Contact
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
            }}
          >
            Tyanglaphant, Kirtipur
            <br />
            Kathmandu, Nepal
            <br />
            (+977) 9803847229
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor:
          theme.palette.mode === "dark"
            ? "#050505"
            : theme.palette.background.navbar,
        boxShadow: "none",
        "& *:focus": {
          outline: "none",
        },
      }}
    >
      <Toolbar>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Box
            component="img"
            src="/logo.png"
            alt="Furnish Logo"
            sx={{
              height: 50,
              marginRight: 2,
              display: "block",
              borderRadius: "50%",
            }}
          />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              color: theme.palette.text.primary,
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: { xs: "1.1rem", sm: "1.25rem" },
            }}
          >
            DHURBA FURNITURE
          </Typography>
        </motion.div>
        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ mr: 2 }}>
          <ThemeToggleButton />
        </Box>

        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              color: theme.palette.text.primary,
              fontSize: "1.5rem",
            }}
          >
            ☰
          </IconButton>
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
            {navItems.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  component={Link}
                  to={item.path}
                  onClick={() => handleNavigation(item.path, item.scrollTo)}
                  sx={{
                    color: theme.palette.text.primary,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "2px",
                      backgroundColor: theme.palette.primary.main,
                      transform: isActive(item) ? "scaleX(1)" : "scaleX(0)",
                      transition: "transform 0.3s ease-in-out",
                    },
                    "&:hover::after": {
                      transform: "scaleX(1)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
          </Box>
        )}
      </Toolbar>
      <AnimatePresence>
        {isMobile && (
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "100%",
                maxWidth: "100vw",
              },
            }}
          >
            {drawer}
          </Drawer>
        )}
      </AnimatePresence>
    </AppBar>
  );
};

export default Navbar;
