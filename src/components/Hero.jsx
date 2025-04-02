import React, { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
  Grid,
} from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-image", {
        duration: 1.5,
        opacity: 0,
        x: -100,
        ease: "power3.out",
      });

      gsap.from(".hero-text", {
        duration: 1.5,
        opacity: 0,
        x: isMobile ? 0 : 100,
        y: isMobile ? 50 : 0,
        ease: "power3.out",
        delay: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <Box
      ref={heroRef}
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? "#252525" : "#ffffff",
        pt: { xs: 2, md: 4 },
        pb: { xs: 4, md: 6 },
        mt: 0,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              className="hero-image"
              sx={{
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    theme.palette.mode === "dark"
                      ? "linear-gradient(45deg, #2c2c2c 25%, transparent 25%)"
                      : "linear-gradient(45deg, #f3f4f6 25%, transparent 25%)",
                  transform: "skewY(-6deg)",
                  zIndex: -1,
                },
              }}
            >
              <img
                src="/poster.png"
                alt="Isometric Furniture House"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  height: "auto",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              className="hero-text"
              sx={{
                textAlign: { xs: "center", md: "right" },
              }}
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  color: theme.palette.mode === "dark" ? "#e0e0e0" : "#1a1a1a",
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                }}
              >
                Transform Your Space
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: theme.palette.mode === "dark" ? "#bead99" : "#666",
                  mb: 4,
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                }}
              >
                Discover our curated collection of premium furniture
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.mode === "dark" ? "#a0a0a0" : "#888",
                  maxWidth: { xs: "100%", md: "400px" },
                  marginLeft: { xs: "auto", md: "auto" },
                  marginRight: { xs: "auto", md: "auto" },
                }}
              >
                Elevate your living spaces with our carefully selected pieces
                that blend style, comfort, and functionality. Your dream home
                starts here.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
