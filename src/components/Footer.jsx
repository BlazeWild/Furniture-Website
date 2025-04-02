import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  Grid,
  useTheme,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    if (path.startsWith("/#")) {
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.getElementById(path.substring(2));
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.getElementById(path.substring(2));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate(path);
    }
  };

  const socialIcons = [
    {
      icon: FacebookIcon,
      name: "Facebook",
      url: "https://www.facebook.com/dhurbafurniture",
    },
    {
      icon: InstagramIcon,
      name: "Instagram",
      url: "https://www.instagram.com/dhurbafurniture",
    },
    {
      icon: TwitterIcon,
      name: "Twitter",
      url: "https://www.twitter.com/dhurbafurniture",
    },
    {
      icon: PinterestIcon,
      name: "Pinterest",
      url: "https://www.pinterest.com/dhurbafurniture",
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        backgroundColor: theme.palette.background.footer,
        color: isDarkMode ? "#e0e0e0" : "#333333",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: isDarkMode ? "#ffffff" : "#333333",
              }}
            >
              DHURBA FURNITURE
            </Typography>
            <Typography
              variant="body2"
              sx={{
                maxWidth: "80%",
                mb: 2,
                color: isDarkMode
                  ? "rgba(255, 255, 255, 0.7)"
                  : "rgba(0, 0, 0, 0.7)",
              }}
            >
              Quality furniture for every home. Crafted with care and designed
              for comfort.
            </Typography>

            {/* Social Media Icons */}
            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              {socialIcons.map((item) => (
                <IconButton
                  key={item.name}
                  component="a"
                  href={item.url}
                  target="_blank"
                  rel="noopener"
                  aria-label={item.name}
                  sx={{
                    color: isDarkMode
                      ? "rgba(255, 255, 255, 0.9)"
                      : "rgba(0, 0, 0, 0.7)",
                    backgroundColor: isDarkMode
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.05)",
                    "&:hover": {
                      backgroundColor: isDarkMode
                        ? "rgba(255, 255, 255, 0.2)"
                        : "rgba(0, 0, 0, 0.1)",
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <item.icon />
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: isDarkMode ? "#ffffff" : "#333333",
              }}
            >
              Shop
            </Typography>
            <Box component="ul" sx={{ pl: 0, listStyle: "none" }}>
              {["Living Room", "Dining Room", "Bedroom", "Office"].map(
                (item) => (
                  <Box component="li" key={item} sx={{ mb: 1 }}>
                    <Link
                      component="button"
                      onClick={() =>
                        handleNavigation(
                          `/${item.toLowerCase().replace(/\s+/g, "-")}`
                        )
                      }
                      sx={{
                        color: isDarkMode
                          ? "rgba(255, 255, 255, 0.7)"
                          : "rgba(0, 0, 0, 0.7)",
                        "&:hover": { color: theme.palette.primary.main },
                        "&:focus": { outline: "none" },
                        "&:active": { color: "inherit" },
                        textTransform: "none",
                        fontWeight: "normal",
                      }}
                    >
                      {item}
                    </Link>
                  </Box>
                )
              )}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: isDarkMode ? "#ffffff" : "#333333",
              }}
            >
              Customer Service
            </Typography>
            <Box component="ul" sx={{ pl: 0, listStyle: "none" }}>
              {[
                { name: "Contact Us", id: "contact" },
                { name: "FAQs", id: "faqs" },
                { name: "Privacy Policy", id: "privacy-policy" },
              ].map((item) => (
                <Box component="li" key={item.name} sx={{ mb: 1 }}>
                  <Link
                    component="button"
                    onClick={() => handleNavigation(`/#${item.id}`)}
                    sx={{
                      color: isDarkMode
                        ? "rgba(255, 255, 255, 0.7)"
                        : "rgba(0, 0, 0, 0.7)",
                      "&:hover": { color: theme.palette.primary.main },
                      "&:focus": { outline: "none" },
                      "&:active": { color: "inherit" },
                      textTransform: "none",
                      fontWeight: "normal",
                    }}
                  >
                    {item.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: isDarkMode ? "#ffffff" : "#333333",
              }}
            >
              Contact Information
            </Typography>
            <Box sx={{ pl: 0 }}>
              <Typography
                variant="body2"
                sx={{
                  color: isDarkMode
                    ? "rgba(255, 255, 255, 0.7)"
                    : "rgba(0, 0, 0, 0.7)",
                  mb: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                Tyanglaphant, Kirtipur-02
                <br />
                Kathmandu, Nepal
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: isDarkMode
                    ? "rgba(255, 255, 255, 0.7)"
                    : "rgba(0, 0, 0, 0.7)",
                  mb: 2,
                }}
              >
                (+977) 9803847229
                <br />
                (+977) 9841234567
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: isDarkMode
                    ? "rgba(255, 255, 255, 0.7)"
                    : "rgba(0, 0, 0, 0.7)",
                }}
              >
                <a
                  href="mailto:dhurbafurniture@gmail.com"
                  style={{
                    color: isDarkMode
                      ? "rgba(255, 255, 255, 0.7)"
                      : "rgba(0, 0, 0, 0.7)",
                    textDecoration: "none",
                  }}
                >
                  dhurbafurniture@gmail.com
                </a>
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: isDarkMode
              ? "1px solid rgba(255, 255, 255, 0.1)"
              : "1px solid rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: isDarkMode
                ? "rgba(255, 255, 255, 0.5)"
                : "rgba(0, 0, 0, 0.5)",
            }}
          >
            © {new Date().getFullYear()} DHURBA FURNITURE. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
