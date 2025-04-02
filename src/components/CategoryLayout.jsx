import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CategoryLayout = ({ title, description, products }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.background.default
            : "#f8f9fa",
        transition: "background-color 0.3s ease",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h1"
            align="center"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: theme.palette.mode === "dark" ? "#f0f0f0" : "#333",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: 6,
              color: theme.palette.mode === "dark" ? "#cccccc" : "#666",
            }}
          >
            {description}
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                style={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                    backgroundColor:
                      theme.palette.mode === "dark" ? "#2a2a2a" : "#f8f6f2",
                    boxShadow:
                      theme.palette.mode === "dark"
                        ? "0 8px 20px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2), 0 0 15px rgba(190, 173, 153, 0.15)"
                        : "0 8px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06), 0 0 15px rgba(140, 120, 90, 0.15)",
                    cursor: "pointer",
                  }}
                  onClick={() => handleProductClick(product.id)}
                >
                  <Box
                    sx={{
                      position: "relative",
                      paddingTop: "100%", // 1:1 Aspect Ratio
                      width: "100%",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={product.image}
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
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      height: "220px",
                      p: 2,
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{
                        color:
                          theme.palette.mode === "dark" ? "#f0f0f0" : "#333",
                        fontSize: "1.1rem",
                        mb: 1,
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color:
                          theme.palette.mode === "dark"
                            ? "#cccccc"
                            : "text.secondary",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        minHeight: "40px",
                        maxHeight: "40px",
                        lineHeight: 1.3,
                        fontSize: "0.85rem",
                        mb: 1,
                      }}
                    >
                      {product.description}
                    </Typography>
                    <Box sx={{ mt: "auto" }}>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 1.5,
                          color:
                            theme.palette.mode === "dark"
                              ? "#b4a88c"
                              : "#8c785a",
                          fontSize: "1rem",
                        }}
                      >
                        ${product.price}
                      </Typography>
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProductClick(product.id);
                        }}
                        sx={{
                          backgroundColor:
                            theme.palette.mode === "dark" ? "#3a3a3a" : "#333",
                          color:
                            theme.palette.mode === "dark" ? "#f0f0f0" : "#fff",
                          "&:hover": {
                            backgroundColor:
                              theme.palette.mode === "dark"
                                ? "#4a4a4a"
                                : "#555",
                          },
                        }}
                      >
                        View Details
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoryLayout;
