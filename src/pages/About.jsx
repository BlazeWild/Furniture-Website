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
  useTheme as useMuiTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTheme as useCustomTheme } from "../contexts/ThemeContext";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const About = () => {
  const theme = useMuiTheme();
  const { mode, isDarkMode } = useCustomTheme();
  const navigate = useNavigate();

  const features = [
    {
      title: "Quality Craftsmanship",
      description:
        "Our furniture is crafted with premium materials and expert attention to detail, ensuring lasting durability and comfort.",
      image: "/about/quality-craftmenship.jpg",
    },
    {
      title: "Elegant Design",
      description:
        "Each piece is thoughtfully designed to blend aesthetics with functionality, creating timeless pieces for your home.",
      image: "/about/design.jpg",
    },
    {
      title: "Custom Design Solutions",
      description:
        "We offer personalized furniture solutions tailored to your specific needs and space requirements, bringing your vision to life.",
      image: "/about/customer-solutions.jpg",
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box
          sx={{
            mb: 8,
            textAlign: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 3,
            }}
          >
            <Box
              component="img"
              src="/logo.png"
              alt="Dhurba Furniture Logo"
              sx={{
                height: 80,
                width: 80,
                marginRight: 3,
                display: "block",
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: isDarkMode
                  ? "0 8px 32px rgba(0, 0, 0, 0.3)"
                  : "0 8px 32px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: "bold",
                color: theme.palette.text.primary,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              About DHURBA FURNITURE
            </Typography>
          </Box>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Crafting Elegance and Comfort for Your Home Since 2005
          </Typography>
        </Box>

        {/* Main Content */}
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ pr: { md: 4 } }}>
              <Typography
                variant="h4"
                sx={{
                  mb: 4,
                  fontWeight: "bold",
                  color: theme.palette.text.primary,
                }}
              >
                Our Story
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: theme.palette.text.secondary,
                  lineHeight: 1.8,
                  textAlign: "justify",
                }}
              >
                Founded in 2005, DHURBA FURNITURE has been at the forefront of
                furniture design and manufacturing in Nepal. Our journey began
                with a simple mission: to create beautiful, comfortable, and
                durable furniture that enhances the lives of our customers.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: theme.palette.text.secondary,
                  lineHeight: 1.8,
                  textAlign: "justify",
                }}
              >
                Over the years, we've grown from a small workshop to a leading
                furniture manufacturer, serving customers across Nepal. Our
                commitment to quality and innovation has earned us a reputation
                for excellence in the industry.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                paddingTop: "75%", // This creates a 4:3 aspect ratio (3/4 = 0.75)
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: isDarkMode
                  ? "0 8px 32px rgba(0, 0, 0, 0.3)"
                  : "0 8px 32px rgba(0, 0, 0, 0.1)",
                mt: { xs: 4, md: 0 },
              }}
            >
              <Box
                component="img"
                src="/about/workshop.jpg"
                alt="Our Workshop"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Features Section */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 6,
              fontWeight: "bold",
              textAlign: "center",
              color: theme.palette.text.primary,
            }}
          >
            Why Choose Us
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid
                item
                xs={12}
                sm={index === features.length - 1 ? 12 : 6}
                md={4}
                key={feature.title}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: theme.palette.background.paper,
                    boxShadow: isDarkMode
                      ? "0 6px 16px rgba(0, 0, 0, 0.3)"
                      : "0 6px 16px rgba(0, 0, 0, 0.15)",
                    transition: "box-shadow 0.3s ease",
                    "&:hover": {
                      boxShadow: isDarkMode
                        ? "0 12px 24px rgba(0, 0, 0, 0.4)"
                        : "0 12px 24px rgba(0, 0, 0, 0.2)",
                    },
                    width: "100%",
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: "bold",
                        color: theme.palette.text.primary,
                        fontSize: {
                          xs: "1.25rem",
                          sm: "1.25rem",
                          md: "1.5rem",
                        },
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                        fontSize: "0.875rem",
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
