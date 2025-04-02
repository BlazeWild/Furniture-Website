import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { ArrowBack } from "@mui/icons-material";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();

  // This would typically come from an API or database
  const product = {
    id: parseInt(id),
    name: "Modern Sofa Set",
    description:
      "Elegant 3-piece sofa set with premium upholstery and sturdy wooden frame. Perfect for modern living spaces.",
    price: 1299.99,
    image: "/featured/sofa-set.jpg",
    features: [
      "Premium quality upholstery",
      "Sturdy wooden frame",
      "Ergonomic design",
      "Easy to clean",
      "5-year warranty",
    ],
    specifications: {
      dimensions: "L: 220cm x W: 90cm x H: 85cm",
      material: "Solid wood, premium fabric",
      color: "Charcoal Gray",
      weight: "85 kg",
    },
  };

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.background.default
            : "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
          sx={{
            mb: 4,
            color: theme.palette.mode === "dark" ? "#f0f0f0" : "#333",
          }}
        >
          Back to Products
        </Button>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  position: "relative",
                  paddingTop: "100%",
                  width: "100%",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow:
                    theme.palette.mode === "dark"
                      ? "0 8px 20px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2), 0 0 15px rgba(190, 173, 153, 0.15)"
                      : "0 8px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06), 0 0 15px rgba(140, 120, 90, 0.15)",
                }}
              >
                <Box
                  component="img"
                  src={product.image}
                  alt={product.name}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter:
                      theme.palette.mode === "dark"
                        ? "brightness(0.95)"
                        : "none",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  mb: 2,
                  fontWeight: "bold",
                  color: theme.palette.mode === "dark" ? "#f0f0f0" : "#333",
                }}
              >
                {product.name}
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  color: theme.palette.mode === "dark" ? "#b4a88c" : "#8c785a",
                }}
              >
                ${product.price}
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  mb: 4,
                  color: theme.palette.mode === "dark" ? "#cccccc" : "#666",
                  fontSize: "1.1rem",
                }}
              >
                {product.description}
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    color: theme.palette.mode === "dark" ? "#f0f0f0" : "#333",
                  }}
                >
                  Features
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {product.features.map((feature, index) => (
                    <Box
                      component="li"
                      key={index}
                      sx={{
                        mb: 1,
                        color:
                          theme.palette.mode === "dark" ? "#cccccc" : "#666",
                        display: "flex",
                        alignItems: "center",
                        "&::before": {
                          content: '"•"',
                          color:
                            theme.palette.mode === "dark"
                              ? "#b4a88c"
                              : "#8c785a",
                          marginRight: 1,
                        },
                      }}
                    >
                      {feature}
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    color: theme.palette.mode === "dark" ? "#f0f0f0" : "#333",
                  }}
                >
                  Specifications
                </Typography>
                <Grid container spacing={2}>
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <Grid item xs={6} key={key}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color:
                              theme.palette.mode === "dark"
                                ? "#b4a88c"
                                : "#8c785a",
                            textTransform: "capitalize",
                          }}
                        >
                          {key}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color:
                              theme.palette.mode === "dark"
                                ? "#cccccc"
                                : "#666",
                          }}
                        >
                          {value}
                        </Typography>
                      </Grid>
                    )
                  )}
                </Grid>
              </Box>

              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  backgroundColor:
                    theme.palette.mode === "dark" ? "#3a3a3a" : "#333",
                  color: theme.palette.mode === "dark" ? "#f0f0f0" : "#fff",
                  "&:hover": {
                    backgroundColor:
                      theme.palette.mode === "dark" ? "#4a4a4a" : "#555",
                  },
                }}
              >
                Add to Cart
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductDetail;
