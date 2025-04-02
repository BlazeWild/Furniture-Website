import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const features = [
    {
      title: "Quality Materials",
      description:
        "We use only the finest materials to ensure durability and comfort.",
      icon: "🌟",
    },
    {
      title: "Expert Craftsmanship",
      description:
        "Our skilled artisans create each piece with attention to detail.",
      icon: "🔨",
    },
    {
      title: "Sustainable Practices",
      description:
        "We are committed to environmentally friendly manufacturing processes.",
      icon: "🌱",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Your satisfaction is our top priority, backed by our guarantee.",
      icon: "👍",
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 8,
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.background.default
            : "#f8f9fa",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: theme.palette.mode === "dark" ? "#f0f0f0" : "#333",
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: 6,
              color: theme.palette.mode === "dark" ? "#cccccc" : "#666",
            }}
          >
            Crafting comfort and style for your home
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor:
                      theme.palette.mode === "dark"
                        ? theme.palette.background.paper
                        : "#fff",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                      boxShadow: "0 8px 12px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography
                      variant="h1"
                      sx={{
                        mb: 2,
                        fontSize: "3rem",
                      }}
                    >
                      {feature.icon}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: "bold",
                        color:
                          theme.palette.mode === "dark"
                            ? "#f0f0f0"
                            : theme.palette.text.primary,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color={
                        theme.palette.mode === "dark"
                          ? "#cccccc"
                          : theme.palette.text.secondary
                      }
                    >
                      {feature.description}
                    </Typography>
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

export default About;
