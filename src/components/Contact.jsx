import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme as useMuiTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "../contexts/ThemeContext";

const Contact = () => {
  const muiTheme = useMuiTheme();
  const { isDarkMode } = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, bank transfers, and cash payments. For online orders, we use secure payment gateways to ensure your transaction is safe.",
    },
    {
      question: "Do you offer delivery services?",
      answer:
        "Yes, we provide delivery services across Nepal. Delivery times vary based on your location and the size of the furniture. We'll provide an estimated delivery date at the time of purchase.",
    },
    {
      question: "What is your delivery process?",
      answer:
        "Our delivery team carefully handles and transports your furniture. We ensure proper packaging and protection during transit. Standard delivery time is 3-7 business days within city limits. For remote areas, delivery may take 7-14 business days.",
    },
    {
      question: "Do you offer installation services?",
      answer:
        "Yes, we offer professional installation services for all furniture pieces. Our team will assemble and set up your furniture in your desired location.",
    },
    {
      question: "Can I customize my furniture?",
      answer:
        "Yes, we offer customization services for most of our furniture pieces. You can choose different materials, colors, and dimensions to match your specific needs.",
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: muiTheme.palette.background.default,
        borderTop: isDarkMode
          ? "1px solid rgba(255, 255, 255, 0.1)"
          : "1px solid rgba(0, 0, 0, 0.1)",
      }}
      id="contact"
    >
      <Container maxWidth="lg">
        {/* Header */}
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
              alt="Furnish Logo"
              sx={{
                height: 80,
                marginRight: 3,
                display: "block",
                borderRadius: "50%",
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
                color: muiTheme.palette.text.primary,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              Contact Us
            </Typography>
          </Box>
          <Typography
            variant="h5"
            sx={{
              color: muiTheme.palette.text.secondary,
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Get in Touch with Us
          </Typography>
        </Box>

        {/* Contact Information and Business Hours */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: muiTheme.palette.background.paper,
                boxShadow: isDarkMode
                  ? "0 6px 16px rgba(0, 0, 0, 0.3)"
                  : "0 6px 16px rgba(0, 0, 0, 0.15)",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    fontWeight: "bold",
                    color: muiTheme.palette.text.primary,
                  }}
                >
                  Visit Our Showroom
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 2,
                    color: muiTheme.palette.text.secondary,
                  }}
                >
                  Dhurba Furniture
                  <br />
                  Tyanglaphant, Kirtipur-02
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    height: "200px",
                    borderRadius: 1,
                    overflow: "hidden",
                    mt: 2,
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.456805007344!2d85.284000!3d27.704000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a74aa1cd1%3A0x971b77f2d7c75800!2sBishal%20Bazar%20Complex!5e0!3m2!1sen!2snp!4v1645000000000!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: muiTheme.palette.background.paper,
                boxShadow: isDarkMode
                  ? "0 6px 16px rgba(0, 0, 0, 0.3)"
                  : "0 6px 16px rgba(0, 0, 0, 0.15)",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    fontWeight: "bold",
                    color: muiTheme.palette.text.primary,
                  }}
                >
                  Business Hours
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 2,
                    color: muiTheme.palette.text.secondary,
                  }}
                >
                  Sunday - Friday: 7:00 AM - 7:00 PM
                  <br />
                  Saturday: 7:00 AM - 3:00 PM
                </Typography>
                <Box
                  sx={{
                    mt: 4,
                    pt: 3,
                    borderTop: isDarkMode
                      ? "1px solid rgba(255, 255, 255, 0.1)"
                      : "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: "bold",
                      color: muiTheme.palette.primary.main,
                    }}
                  >
                    Contact Information
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      color: muiTheme.palette.text.secondary,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <span style={{ color: muiTheme.palette.primary.main }}>
                      📞
                    </span>{" "}
                    <strong>Phone:</strong> +977 9803847229
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: muiTheme.palette.text.secondary,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <span style={{ color: muiTheme.palette.primary.main }}>
                      ✉️
                    </span>{" "}
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:info@dhurbafurniture.com"
                      style={{
                        color: muiTheme.palette.primary.main,
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.textDecoration = "underline";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.textDecoration = "none";
                      }}
                    >
                      dhurbafurniture@gmail.com
                    </a>
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* FAQs Section */}
        <Box sx={{ mb: 8 }} id="faqs">
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontWeight: "bold",
              textAlign: "center",
              color: muiTheme.palette.text.primary,
            }}
          >
            Frequently Asked Questions
          </Typography>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleAccordionChange(index)}
              sx={{
                mb: 2,
                backgroundColor: muiTheme.palette.background.paper,
                boxShadow: isDarkMode
                  ? "0 4px 12px rgba(0, 0, 0, 0.2)"
                  : "0 4px 12px rgba(0, 0, 0, 0.1)",
                "&:before": {
                  display: "none",
                },
                "& .MuiAccordionSummary-root": {
                  "&:focus": {
                    outline: "none",
                  },
                },
                "& .MuiAccordionSummary-content": {
                  color: muiTheme.palette.text.primary,
                  fontWeight: "bold",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  "&:focus": {
                    outline: "none",
                  },
                }}
              >
                {faq.question}
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body1"
                  sx={{
                    color: muiTheme.palette.text.secondary,
                    lineHeight: 1.6,
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
