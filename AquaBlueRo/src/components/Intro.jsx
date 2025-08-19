
import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import StatsCounter from "./StatsCounter"; 

function Intro() {
  return (
    <Box
    sx={{
      background: "linear-gradient(to right, #e0f7fa, #ffffff)", // Aqua to white gradient
      py: 6,
    }}
  >
    <Box
      sx={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: 4,
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Main Title */}
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#1976d2", // Aqua blue color
          textAlign: "center",
          mb: 3,
          textTransform: "uppercase",
        }}
      >
        Aqua Blue
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="h6"
        component="p"
        sx={{
          textAlign: "center",
          mb: 4,
          color: "#555",
        }}
      >
        We are leading manufacturer of water purifiers and spares.
      </Typography>

      {/* Section Title */}
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 3,
          color: "#333",
        }}
      >
        Presenting the Aqua Blue water purifier:
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        paragraph
        sx={{
          mb: 4,
          textAlign: "center",
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: 1.6,
        }}
      >
        We are a well known ISO 9001:2008 certified company dealing in RO water
        purifiers. Our brand name has become most popular &amp; acceptable across
        Asia because of our outstanding quality, uncompromising components, and
        unique and revolutionary designs of water purifiers.
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* Stats Section */}
      <Typography
        variant="h5"
        component="h3"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 4,
          color: "#333",
        }}
      >
        Our Great Achievements
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {/* Instead of <StatCard />, we use <StatsCounter> */}
        <Grid item xs={6} sm={4} md={2.4}>
          <StatsCounter endValue={2} label="Years In Business" />
        </Grid>
        <Grid item xs={6} sm={4} md={2.4}>
          <StatsCounter endValue={5000} label="Satisfied Clients" />
        </Grid>
        <Grid item xs={6} sm={4} md={2.4}>
          <StatsCounter endValue={15} label="Quality Awards" />
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
}

export default Intro;
