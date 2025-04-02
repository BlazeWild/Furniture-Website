import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  useTheme as useMuiTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const categories = [
  {
    title: "Living Room",
    image: "/living-room.jpg",
    description: "Comfortable and stylish seating solutions",
    path: "/living-room",
  },
  {
    title: "Bedroom",
    image: "/bedroom.jpg",
    description: "Peaceful and elegant bedroom furniture",
    path: "/bedroom",
  },
  {
    title: "Dining Room",
    image: "/dining-room.jpg",
    description: "Perfect dining sets for your home",
    path: "/dining-room",
  },
  {
    title: "Office",
    image: "/office.jpg",
    description: "Professional workspace solutions",
    path: "/office",
  },
];

const Categories = () => {
  const muiTheme = useMuiTheme();
  const { isDarkMode, mode } = useTheme();

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: muiTheme.palette.background.default,
        borderTop:
          mode === "dark"
            ? "1px solid rgba(255, 255, 255, 0.05)"
            : "1px solid rgba(0, 0, 0, 0.05)",
      }}
      data-theme={mode}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{
            mb: 6,
            fontWeight: "bold",
            color: muiTheme.palette.text.primary,
            position: "relative",
            display: "inline-block",
            left: "50%",
            transform: "translateX(-50%)",
            paddingBottom: "15px",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "2px",
              backgroundColor: muiTheme.palette.primary.main,
            },
          }}
        >
          Shop by Category
        </Typography>
        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={category.title}>
              <Card
                component={Link}
                to={category.path}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "box-shadow 0.4s ease",
                  textDecoration: "none",
                  boxShadow: isDarkMode
                    ? "0 6px 16px rgba(0, 0, 0, 0.5)"
                    : "0 6px 16px rgba(0, 0, 0, 0.15)",
                  "&:hover": {
                    boxShadow: isDarkMode
                      ? "0 8px 35px rgba(0, 0, 0, 0.8)"
                      : "0 8px 35px rgba(0, 0, 0, 0.4)",
                  },
                  backgroundColor: muiTheme.palette.background.paper,
                  borderRadius: 2,
                  border: isDarkMode
                    ? "1px solid rgba(255, 255, 255, 0.05)"
                    : "1px solid rgba(0, 0, 0, 0.08)",
                }}
              >
                <Box
                  sx={{
                    height: 200,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: isDarkMode ? "brightness(0.95)" : "none",
                    }}
                    image={category.image}
                    alt={category.title}
                  />
                </Box>
                <CardContent
                  sx={{
                    flexGrow: 0,
                    height: "120px",
                    overflow: "hidden",
                    padding: "20px",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    sx={{
                      color: muiTheme.palette.text.primary,
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {category.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: muiTheme.palette.text.secondary,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {category.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Categories;
