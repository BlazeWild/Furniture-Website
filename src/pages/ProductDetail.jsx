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
  const productData = {
    // Featured products
    "modern-tv-unit": {
      id: 1,
      name: "Modern TV Unit",
      description:
        "Sleek TV unit with ample storage space. Features contemporary design and high-quality materials.",
      price: "Rs. 45,000",
      image: "/featuredProd/tv_cabinet.jpg",
      features: [
        "Premium quality materials",
        "Multiple storage compartments",
        "Cable management system",
        "Easy to assemble",
        "2-year warranty",
      ],
      specifications: {
        dimensions: "L: 180cm x W: 40cm x H: 60cm",
        material: "Engineered wood with laminate finish",
        color: "Walnut Brown",
        weight: "45 kg",
      },
    },
    "wooden-dining-table": {
      id: 2,
      name: "Wooden Dining Table",
      description:
        "Elegant dining table crafted from solid wood. Perfect for family gatherings and entertaining guests.",
      price: "Rs. 38,500",
      image: "/featuredProd/dining.jpg",
      features: [
        "Solid wood construction",
        "Elegant design",
        "Durable finish",
        "Seats 6 people comfortably",
        "5-year warranty",
      ],
      specifications: {
        dimensions: "L: 180cm x W: 90cm x H: 75cm",
        material: "Solid sheesham wood",
        color: "Natural Wood Finish",
        weight: "65 kg",
      },
    },
    "ergonomic-office-chair": {
      id: 3,
      name: "Ergonomic Office Chair",
      description:
        "Comfortable office chair designed for long work hours. Features adjustable height and lumbar support.",
      price: "Rs. 15,900",
      image: "/featuredProd/office-chair.jpg",
      features: [
        "Ergonomic design",
        "Adjustable height",
        "Lumbar support",
        "Breathable mesh back",
        "360° swivel",
      ],
      specifications: {
        dimensions: "W: 65cm x D: 65cm x H: 110-120cm",
        material: "Metal frame, mesh back, foam seat",
        color: "Black",
        weight: "15 kg",
      },
    },
    "king-size-bed": {
      id: 4,
      name: "King Size Bed",
      description:
        "Luxurious king-size bed with sturdy construction and elegant design. Perfect for master bedrooms.",
      price: "Rs. 52,000",
      image: "/featuredProd/bed.jpg",
      features: [
        "Premium quality materials",
        "Sturdy construction",
        "Elegant headboard design",
        "Spacious sleeping area",
        "5-year warranty",
      ],
      specifications: {
        dimensions: "L: 210cm x W: 190cm x H: 110cm",
        material: "Solid wood frame with premium finish",
        color: "Rich Mahogany",
        weight: "90 kg",
      },
    },
    "accent-armchair": {
      id: 5,
      name: "Accent Armchair",
      description:
        "Stylish accent armchair with comfortable padding and elegant design. Perfect for living rooms and reading corners.",
      price: "Rs. 22,500",
      image: "/featuredProd/arm-chair.jpg",
      features: [
        "Premium upholstery",
        "Comfortable padding",
        "Durable wooden frame",
        "Elegant design",
        "3-year warranty",
      ],
      specifications: {
        dimensions: "W: 75cm x D: 80cm x H: 90cm",
        material: "Solid wood frame with premium fabric upholstery",
        color: "Beige with wooden accents",
        weight: "25 kg",
      },
    },
    "coffee-table": {
      id: 6,
      name: "Coffee Table",
      description:
        "Modern coffee table with sleek design and sturdy construction. Perfect for living rooms and entertainment areas.",
      price: "Rs. 18,750",
      image: "/featuredProd/coffee-table.jpg",
      features: [
        "Sleek modern design",
        "Sturdy construction",
        "Storage shelf",
        "Easy to clean surface",
        "2-year warranty",
      ],
      specifications: {
        dimensions: "L: 120cm x W: 60cm x H: 45cm",
        material: "Engineered wood with glass top",
        color: "Espresso with clear glass",
        weight: "30 kg",
      },
    },

    // Living Room Category Products
    "modern-sofa": {
      id: "modern-sofa",
      name: "Modern Sofa",
      description:
        "Elegant and comfortable 3-seater sofa with premium upholstery and sturdy wooden frame.",
      price: "Rs. 75,000",
      image: "/categories/living-room/sofa.jpg",
      features: [
        "Premium quality upholstery",
        "Sturdy wooden frame",
        "Ergonomic design",
        "Easy to clean fabric",
        "5-year warranty",
      ],
      specifications: {
        dimensions: "L: 220cm x W: 90cm x H: 85cm",
        material: "Solid wood, premium fabric",
        color: "Charcoal Gray",
        weight: "85 kg",
      },
    },
    "tv-unit": {
      id: "tv-unit",
      name: "TV Unit",
      description:
        "Stylish TV unit with built-in storage and cable management system.",
      price: "Rs. 45,000",
      image: "/categories/living-room/tv-unit.jpg",
      features: [
        "Built-in storage compartments",
        "Cable management system",
        "Modern design",
        "High-quality materials",
        "2-year warranty",
      ],
      specifications: {
        dimensions: "L: 180cm x W: 45cm x H: 60cm",
        material: "Engineered wood with laminate finish",
        color: "Walnut Brown",
        weight: "50 kg",
      },
    },
    "accent-chair": {
      id: "accent-chair",
      name: "Accent Armchair",
      description:
        "Comfortable accent chair with premium fabric and ergonomic design.",
      price: "Rs. 22,500",
      image: "/categories/living-room/accent-chair.jpg",
      features: [
        "Premium fabric upholstery",
        "Ergonomic design",
        "Sturdy wooden legs",
        "Comfortable padding",
        "3-year warranty",
      ],
      specifications: {
        dimensions: "W: 75cm x D: 80cm x H: 90cm",
        material: "Wood, premium fabric",
        color: "Beige",
        weight: "25 kg",
      },
    },
    bookshelf: {
      id: "bookshelf",
      name: "Bookshelf",
      description:
        "Modern bookshelf with adjustable shelves and built-in lighting.",
      price: "Rs. 35,000",
      image: "/categories/living-room/bookshelf.jpg",
      features: [
        "Adjustable shelves",
        "Built-in LED lighting",
        "Sturdy construction",
        "Modern design",
        "2-year warranty",
      ],
      specifications: {
        dimensions: "L: 120cm x W: 40cm x H: 200cm",
        material: "Engineered wood",
        color: "White with Oak accents",
        weight: "70 kg",
      },
    },
    "area-rug": {
      id: "area-rug",
      name: "Area Rug",
      description:
        "Luxurious area rug with modern geometric pattern and soft texture.",
      price: "Rs. 12,000",
      image: "/categories/living-room/area-rug.jpg",
      features: [
        "Soft texture",
        "Modern geometric pattern",
        "Stain-resistant",
        "Easy to clean",
        "1-year warranty",
      ],
      specifications: {
        dimensions: "L: 240cm x W: 170cm",
        material: "Premium synthetic fibers",
        color: "Multi-color pattern",
        weight: "10 kg",
      },
    },

    // Bedroom Category Products
    nightstand: {
      id: "nightstand",
      name: "Nightstand",
      description:
        "Modern nightstand with built-in USB ports and wireless charging pad.",
      price: "Rs. 12,500",
      image: "/categories/bedroom/nightstand.jpg",
      features: [
        "Built-in USB ports",
        "Wireless charging pad",
        "Soft-close drawer",
        "Modern design",
        "2-year warranty",
      ],
      specifications: {
        dimensions: "W: 50cm x D: 40cm x H: 60cm",
        material: "Engineered wood with veneer finish",
        color: "Dark Walnut",
        weight: "15 kg",
      },
    },
    dresser: {
      id: "dresser",
      name: "Dresser",
      description: "Spacious dresser with soft-close drawers and mirror set.",
      price: "Rs. 42,000",
      image: "/categories/bedroom/dresser.jpg",
      features: [
        "Soft-close drawers",
        "Matching mirror",
        "Ample storage space",
        "Classic design",
        "3-year warranty",
      ],
      specifications: {
        dimensions: "W: 120cm x D: 50cm x H: 80cm",
        material: "Solid wood with veneer finish",
        color: "Cherry Wood",
        weight: "60 kg",
      },
    },
    wardrobe: {
      id: "wardrobe",
      name: "Wardrobe",
      description:
        "Full-size wardrobe with sliding doors and built-in lighting.",
      price: "Rs. 65,000",
      image: "/categories/bedroom/wardrobe.jpg",
      features: [
        "Sliding doors",
        "Built-in LED lighting",
        "Multiple compartments",
        "Full-length mirror",
        "5-year warranty",
      ],
      specifications: {
        dimensions: "W: 200cm x D: 60cm x H: 220cm",
        material: "Engineered wood with laminate finish",
        color: "White and Oak",
        weight: "120 kg",
      },
    },
    "vanity-set": {
      id: "vanity-set",
      name: "Vanity Set",
      description: "Elegant vanity set with stool and LED mirror.",
      price: "Rs. 28,500",
      image: "/categories/bedroom/vanity.jpg",
      features: [
        "LED illuminated mirror",
        "Matching stool",
        "Multiple drawers",
        "Elegant design",
        "2-year warranty",
      ],
      specifications: {
        dimensions: "W: 100cm x D: 45cm x H: 140cm",
        material: "Wood with painted finish",
        color: "White",
        weight: "40 kg",
      },
    },
    "bedside-lamp": {
      id: "bedside-lamp",
      name: "Bedside Lamp",
      description:
        "Modern LED bedside lamp with adjustable brightness and color temperature.",
      price: "Rs. 4,500",
      image: "/categories/bedroom/lamp.jpg",
      features: [
        "Adjustable brightness",
        "Color temperature control",
        "Touch controls",
        "Modern design",
        "1-year warranty",
      ],
      specifications: {
        dimensions: "W: 15cm x D: 15cm x H: 35cm",
        material: "Metal and fabric",
        color: "Brushed Nickel with Gray shade",
        weight: "1.5 kg",
      },
    },
  };

  // Get the product ID from the URL parameter
  const productId = id;

  // Find the product in our data or use a default
  const product = productData[productId] || {
    name: "Product Not Found",
    description: "We couldn't find the product you're looking for.",
    price: "N/A",
    image: "/logo.png",
    features: [],
    specifications: {},
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
                {product.price}
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
