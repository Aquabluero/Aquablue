import React from "react";
import {
  Box,
  Typography,
  Grid,
  Divider,
  TextField,
  Button,
  Link,
  Stack,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "rgb(57, 12, 35)", // AquaBlue Rain background
        color: "white", // White text
        py: 6,
        px: 4,
      }}
    >
      {/* Main Footer Content */}
      <Grid container spacing={4} justifyContent="space-between">
        {/* Useful Links Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "white" }}
          >
            Useful Links
          </Typography>

          <Grid container spacing={2}>
            {/* Left Column */}
            <Grid item xs={6} sm={4}>
              <Stack spacing={1}>
                <Link
                  href="/"
                  color="inherit"
                  underline="hover"
                  sx={{ color: "white" }}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  color="inherit"
                  underline="hover"
                  sx={{ color: "white" }}
                >
                  About Us
                </Link>
                {/* <Link
                  href="/contact"
                  color="inherit"
                  underline="hover"
                  sx={{ color: "white" }}
                >
                  Contact Us
                </Link> */}
              </Stack>
            </Grid>

            {/* Right Column */}
            <Grid item xs={6} sm={4}>
              <Stack spacing={1}>
                <Link
                  href="/products"
                  color="inherit"
                  underline="hover"
                  sx={{ color: "white" }}
                >
                  Our Products
                </Link>
                {/* <Link
                  href="/gallery"
                  color="inherit"
                  underline="hover"
                  sx={{ color: "white" }}
                >
                  Gallery
                </Link> */}
                {/* <Link
                  href="/careers"
                  color="inherit"
                  underline="hover"
                  sx={{ color: "white" }}
                >
                  Career
                </Link> */}
              </Stack>
            </Grid>

            {/* Email Link */}
            {/* <Grid item xs={12} sm={4}>
              <Link
                href="mailto:info@AquaBlue Rain.com"
                color="inherit"
                underline="hover"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "white",
                }}
              >
                <EmailIcon fontSize="small" sx={{ color: "white" }} />
                <Typography sx={{ color: "white" }}>
                  Email to an expert
                </Typography>
              </Link>
            </Grid> */}
          </Grid>
        </Grid>

        {/* Newsletter Section */}
        <Grid item xs={12} md={5}>
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "white" }}
          >
            Newsletter
          </Typography>
          <Typography
            variant="body2"
            paragraph
            sx={{ color: "white", opacity: 0.9 }}
          >
            Get latest updates and offers.
          </Typography>

          <Box
            component="form"
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <TextField
              variant="outlined"
              size="small"
              placeholder="Your email address"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "4px",
                  backgroundColor: "white",
                },
                "& .MuiInputBase-input": {
                  color: "#333",
                },
              }}
            />
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: "4px",
                whiteSpace: "nowrap",
                backgroundColor: "white",
                color: "#00BCD4",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, backgroundColor: "rgba(255,255,255,0.2)" }} />

      {/* Bottom Section */}
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="body2" sx={{ color: "white", opacity: 0.9 }}>
            © Copyright AquaBlue Rain Series 2025. All rights reserved.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" sx={{ color: "white", opacity: 0.9 }}>
            Designed & Developed By Saurabh
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
