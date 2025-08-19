// // Topbar.jsx
// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import AquaBlueLogo from "../assets/AquaBlue-Logo.png";
// import { useNavigate } from "react-router-dom";
// const Topbar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const openMenu = Boolean(anchorEl);

//   // Open menu
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   // Close menu
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const navigate = useNavigate();

//   return (
//     <AppBar position="sticky"   style={{
//       background: "black"
//     }}>
//       <Toolbar>
//         <Typography
//           variant="h6"
//           sx={{
//             display: "flex", // Use flexbox for horizontal alignment
//             alignItems: "center", // Vertically center the image and text
//             flexGrow: 1,
//             margin: "5px",
//             gap: "8px",
//           }}
//         >
//           <img src={AquaBlueLogo} height={80} width={80}></img>
//           <span>Aqua Blue</span>
//         </Typography>
//         <IconButton
//           edge="end"
//           color="inherit"
//           onClick={handleClick}
//           aria-label="menu"
//         >
//           <MenuIcon />
//         </IconButton>
//       </Toolbar>

//       <Menu
//         anchorEl={anchorEl}
//         open={openMenu}
//         onClose={handleClose}
//         MenuListProps={{
//           "aria-labelledby": "basic-button",
//         }}
//       >
//         <MenuItem onClick={handleClose}>Home</MenuItem>
//         <MenuItem onClick={()=>{handleClose();navigate("/about");}}>About Us</MenuItem>
//         <MenuItem onClick={() => { handleClose(); navigate("/products"); }}>Our Products</MenuItem>
//         <MenuItem onClick={handleClose}>Exhibition</MenuItem>
//         <MenuItem onClick={handleClose}>Contact Us</MenuItem>
//       </Menu>
//     </AppBar>
//   );
// };

// export default Topbar;

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AquaBlueLogo from "../assets/AquaBlue-Logo.png";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    handleClose();
    navigate(path);
  };

  return (
    <AppBar position="sticky" style={{ background: "black" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo and Title */}
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={AquaBlueLogo} alt="logo" height={60} width={60} />
          <span>Aqua Blue</span>
        </Typography>

        {/* Desktop Menu */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit" onClick={() => handleNavigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => handleNavigate("/about")}>
              About Us
            </Button>
            <Button color="inherit" onClick={() => handleNavigate("/products")}>
              Our Products
            </Button>
            <Button color="inherit" onClick={() => handleNavigate("/exhibition")}>
              Exhibition
            </Button>
            <Button color="inherit" onClick={() => handleNavigate("/contact")}>
              Contact Us
            </Button>
          </Box>
        )}

        {/* Mobile Menu Icon */}
        {isMobile && (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClick}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              MenuListProps={{ "aria-labelledby": "basic-button" }}
            >
              <MenuItem onClick={() => handleNavigate("/")}>Home</MenuItem>
              <MenuItem onClick={() => handleNavigate("/about")}>About Us</MenuItem>
              <MenuItem onClick={() => handleNavigate("/products")}>Our Products</MenuItem>
              <MenuItem onClick={() => handleNavigate("/exhibition")}>Exhibition</MenuItem>
              <MenuItem onClick={() => handleNavigate("/contact")}>Contact Us</MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
