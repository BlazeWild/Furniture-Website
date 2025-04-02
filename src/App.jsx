import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Box,
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
} from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import LivingRoom from "./pages/LivingRoom";
import Bedroom from "./pages/Bedroom";
import Home from "./pages/Home";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import "./theme.css"; // Import global theme styles
import ProductDetail from "./pages/ProductDetail";
import CategoriesPage from "./pages/Categories";
import About from "./pages/About";

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme } = useTheme();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/living-room" element={<LivingRoom />} />
            <Route path="/bedroom" element={<Bedroom />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Box>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
