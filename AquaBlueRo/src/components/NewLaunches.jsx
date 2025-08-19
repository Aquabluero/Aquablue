// import React from "react";
// import { Box, Typography, Grid, Paper, Divider } from "@mui/material";
// import Page2 from "../assets/Page2.jpg";
// import Page3 from "../assets/Page3.jpg";
// import Page4 from "../assets/Page4.jpg";

// function NewLaunches() {
//   return (
//     <Box>
//       <Divider sx={{ my: 4 }} />
//       <Typography
//         variant="h4"
//         component="h1"
//         gutterBottom
//         sx={{
//           fontWeight: "bold",
//           color: "#1976d2",
//           textAlign: "center",
//           mb: 3,
//           textTransform: "uppercase",
//         }}
//       >
//         New Launch in Purity: Aqua Blue
//       </Typography>
//       <Grid container spacing={5} justifyContent="center">
//         <Grid item xs={6} sm={4} md={2.4}>
//           <img src={Page2} height={500}></img>
//         </Grid>
//         <Grid item xs={6} sm={4} md={2.4}>
//           <img src={Page3} height={500}></img>
//         </Grid>
//         <Grid item xs={6} sm={4} md={2.4}>
//           <img src={Page4} height={500}></img>
//         </Grid>
//       </Grid>
//       <Box
//         sx={{
//           bgcolor: "#1976d2",
//           color: "white",
//           maxWidth: 200,
//           mx: "auto",
//           mt: 4,
//           mb: 4,
//           p: 2,
//           borderRadius: 2,
//           textAlign: "center",
//           boxShadow: 3,
//         }}
//       >
//         <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//           INR 19,900/-
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// export default NewLaunches;
import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import AnimatedImage from "./AnimatedImage"; // or wherever you placed it

import Page2 from "../assets/Page2.jpg";
import Page3 from "../assets/Page3.jpg";
import Page4 from "../assets/Page4.jpg";

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
        New Launch in Purity: Aqua Blue
      </Typography>

      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={6} sm={4} md={2.4}>
          <AnimatedImage src={Page2} alt="Page2" height={500} />
        </Grid>
        <Grid item xs={6} sm={4} md={2.4}>
          <AnimatedImage src={Page3} alt="Page3" height={500} />
        </Grid>
        <Grid item xs={6} sm={4} md={2.4}>
          <AnimatedImage src={Page4} alt="Page4" height={500} />
        </Grid>
      </Grid>

      <Box
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
      </Box>
    </Box>
  );
}

export default NewLaunches;
