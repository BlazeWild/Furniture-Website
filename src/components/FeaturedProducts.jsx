import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  useMediaQuery,
  useTheme as useMuiTheme,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import "./FeaturedProducts.css";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// Featured products data
const featuredProducts = [
  {
    id: 1,
    title: "Modern TV Unit",
    image: "/featuredProd/tv_cabinet.jpg",
    price: "Rs. 45,000",
    path: "/product/modern-tv-unit",
  },
  {
    id: 2,
    title: "Wooden Dining Table",
    image: "/featuredProd/dining.jpg",
    price: "Rs. 38,500",
    path: "/product/wooden-dining-table",
  },
  {
    id: 3,
    title: "Ergonomic Office Chair",
    image: "/featuredProd/office-chair.jpg",
    price: "Rs. 15,900",
    path: "/product/ergonomic-office-chair",
  },
  {
    id: 4,
    title: "King Size Bed",
    image: "/featuredProd/bed.jpg",
    price: "Rs. 52,000",
    path: "/product/featured-king-bed",
  },
  {
    id: 5,
    title: "Accent Armchair",
    image: "/featuredProd/arm-chair.jpg",
    price: "Rs. 22,500",
    path: "/product/accent-armchair",
  },
  {
    id: 6,
    title: "Coffee Table",
    image: "/featuredProd/coffee-table.jpg",
    price: "Rs. 18,750",
    path: "/product/coffee-table",
  },
];

const FeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const muiTheme = useMuiTheme();
  const { mode, isDarkMode } = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(muiTheme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(muiTheme.breakpoints.up("md"));
  const navigate = useNavigate();

  // Number of cards to show based on screen size
  const cardsToShow = isMobile ? 1 : isTablet ? 2 : 3;

  // Calculate total slides needed
  const totalSlides = featuredProducts.length;
  const maxIndex = totalSlides - cardsToShow;

  // Fixed one-card-at-a-time navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex > maxIndex ? 0 : nextIndex;
    });

    // Pause auto-scroll temporarily
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const prevSlide = prevIndex - 1;
      return prevSlide < 0 ? maxIndex : prevSlide;
    });

    // Pause auto-scroll temporarily
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setIsPaused(true);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Mouse enter/leave handlers to pause/resume auto-scroll
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const currentProduct = featuredProducts[currentIndex];

  return (
    <Box
      className="featured-products"
      data-theme={mode}
      sx={{
        "--featured-bg": mode === "light" ? "#ffffff" : null,
        "--featured-bg-dark": mode === "dark" ? "#252525" : null,
        "--title-color": mode === "light" ? "#333" : null,
        "--title-color-dark": mode === "dark" ? "#f0f0f0" : null,
        "--accent-color": muiTheme.palette.primary.main,
        "--arrow-bg": mode === "light" ? "#f8f8f8" : null,
        "--arrow-bg-dark": mode === "dark" ? "#2a2a2a" : null,
        "--arrow-hover-bg": mode === "light" ? "#efefef" : null,
        "--arrow-hover-bg-dark": mode === "dark" ? "#333" : null,
        "--card-bg": muiTheme.palette.background.paper,
        "--card-bg-dark": mode === "dark" ? "#2a2a2a" : null,
        "--product-title": muiTheme.palette.text.primary,
        "--product-title-dark": mode === "dark" ? "#f0f0f0" : null,
        "--product-price": mode === "light" ? "#8c785a" : null,
        "--product-price-dark": mode === "dark" ? "#b4a88c" : null,
        "--dot-bg": mode === "light" ? "#ddd" : null,
        "--dot-bg-dark": mode === "dark" ? "#444" : null,
        "--dot-active": muiTheme.palette.primary.main,
        "--dot-active-dark": mode === "dark" ? "#b4a88c" : null,
        "--card-shadow-light": "var(--card-shadow-light)",
        "--card-shadow-dark": "var(--card-shadow-dark)",
        "--card-shadow-hover-light": "var(--card-shadow-hover-light)",
        "--card-shadow-hover-dark": "var(--card-shadow-hover-dark)",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" className="featured-title">
          Featured Products
        </Typography>

        <Box className="carousel-container">
          <IconButton
            onClick={handlePrev}
            aria-label="Previous product"
            className="carousel-arrow"
            disableRipple
            disableFocusRipple
          >
            <ArrowBackIosNewIcon
              sx={{
                fontSize: "1rem",
                color: isDarkMode ? "#b4a88c" : "#8c785a",
              }}
            />
          </IconButton>

          <Box
            ref={carouselRef}
            className="carousel-viewport"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              animate={{
                x: `-${currentIndex * (100 / totalSlides)}%`,
              }}
              transition={{
                type: "tween",
                ease: [0.165, 0.84, 0.44, 1],
                duration: 0.8,
              }}
              style={{
                display: "flex",
                width: `${(totalSlides / cardsToShow) * 100}%`,
              }}
            >
              {featuredProducts.map((product) => (
                <Box
                  key={product.id}
                  sx={{
                    width: `${100 / totalSlides}%`,
                    padding: { xs: 1, sm: 2, md: 3 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Card
                    component={Link}
                    to={product.path}
                    className="product-card"
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.3s ease",
                      textDecoration: "none",
                      backgroundColor: muiTheme.palette.background.paper,
                      boxShadow: isDarkMode
                        ? "0 6px 16px rgba(0, 0, 0, 0.3)"
                        : "0 6px 16px rgba(0, 0, 0, 0.15)",
                      "&:hover": {
                        transform: "translateY(-8px) scale(1.02)",
                        transformOrigin: "center center",
                        boxShadow: isDarkMode
                          ? "0 12px 24px rgba(0, 0, 0, 0.4)"
                          : "0 12px 24px rgba(0, 0, 0, 0.2)",
                      },
                      borderRadius: 2,
                      border: isDarkMode
                        ? "1px solid rgba(255, 255, 255, 0.05)"
                        : "1px solid rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <Box className="product-image-container">
                      <CardMedia
                        component="img"
                        className="product-image"
                        image={product.image}
                        alt={product.title}
                      />
                      <Box className="card-overlay" />
                    </Box>
                    <CardContent
                      sx={{
                        p: 2,
                        backgroundColor: isDarkMode ? "#151515" : "#f8f6f2",
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        className="product-title"
                        variant="h6"
                        component="h3"
                      >
                        {product.title}
                      </Typography>
                      <Typography className="product-price" variant="body1">
                        {product.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </motion.div>
          </Box>

          <IconButton
            onClick={handleNext}
            aria-label="Next product"
            className="carousel-arrow"
            disableRipple
            disableFocusRipple
          >
            <ArrowForwardIosIcon
              sx={{
                fontSize: "1rem",
                color: isDarkMode ? "#b4a88c" : "#8c785a",
              }}
            />
          </IconButton>
        </Box>

        <Box className="navigation-dots">
          {Array.from({ length: totalSlides - (cardsToShow - 1) }).map(
            (_, index) => (
              <Box
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 5000);
                }}
                className={`dot ${currentIndex === index ? "active" : ""}`}
              />
            )
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedProducts;
