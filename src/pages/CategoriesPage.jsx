import React from "react";
import { Box, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import Categories from "../components/Categories";
import { useTheme } from "../contexts/ThemeContext";

const CategoriesPage = () => {
  const navigate = useNavigate();
  const { mode } = useTheme();

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Container maxWidth="lg" sx={{ pt: 4 }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate("/")}
          sx={{
            mb: 2,
            color: mode === "dark" ? "#f0f0f0" : "#333",
            textTransform: "none",
            fontSize: "0.9rem",
            py: 0.5,
            "&:hover": {
              backgroundColor: "transparent",
            },
            "&:focus": {
              outline: "none",
              backgroundColor: "transparent",
            },
          }}
        >
          Back to Home
        </Button>
      </Container>
      <Categories />
    </Box>
  );
};

export default CategoriesPage;
