import React from "react";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import About from "./About";
import Contact from "../components/Contact";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Box id="about">
        <About />
      </Box>
      <Contact />
    </Box>
  );
};

export default Home;
