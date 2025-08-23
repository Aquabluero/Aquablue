
import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import AnimatedImage from "./AnimatedImage"; // or wherever you placed it

import newlaunch1 from "../assets/newlaunch1.jpeg";
import newlaunch2 from "../assets/newlaunch2.jpeg";
import newlaunch3 from "../assets/newlaunch3.jpeg";
import newlaunch4 from "../assets/newlaunch4.jpeg";
import newlaunch5 from "../assets/newlaunch5.jpeg";
import newlaunch6 from "../assets/newlaunch6.jpeg";

function NewLaunches() {
  return (
    <Box>
      <Divider sx={{ my: 4 }} />
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#1976d2",
          textAlign: "center",
          mb: 3,
          textTransform: "uppercase",
        }}
      >
        New Launch in Purity: AquaBlue Rain
      </Typography>

      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={6} sm={4} md={2.4}>
          <AnimatedImage src={newlaunch1} alt="Page2" height={500} />
        </Grid>
        <Grid item xs={6} sm={4} md={2.4}>
          <AnimatedImage src={newlaunch2} alt="Page3" height={500} />
        </Grid>
        <Grid item xs={6} sm={4} md={2.4}>
          <AnimatedImage src={newlaunch3} alt="newlaunch3" height={500} />
        </Grid>
        {/* <Grid item xs={6} sm={4} md={2.4}>
          <AnimatedImage src={newlaunch4} alt="newlaunch4" height={500} />
        </Grid> */}
        <Grid item xs={6} sm={4} md={2.4}>
          <AnimatedImage src={newlaunch5} alt="newlaunch5" height={500} />
        </Grid>
        <Grid item xs={6} sm={4} md={2.4}>
          <AnimatedImage src={newlaunch6} alt="newlaunch6" height={500} />
        </Grid>
      </Grid>

      {/* <Box
        sx={{
          bgcolor: "#1976d2",
          color: "white",
          maxWidth: 200,
          mx: "auto",
          mt: 4,
          mb: 4,
          p: 2,
          borderRadius: 2,
          textAlign: "center",
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          INR 19,900/-
        </Typography>
      </Box> */}
    </Box>
  );
}

export default NewLaunches;
