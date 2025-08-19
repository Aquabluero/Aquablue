import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  CardMedia,
  ListItemIcon,
  Divider,
  Grid,
  Container,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Page2 from "../assets/Page2.jpg";
import Page3 from "../assets/Page3.jpg";

const HomeProducts = () => {
  const products = [
    {
      title: "AQUA+ICA LITE",
      image: Page2,
      features: [
        "Smart LED Display",
        "12 Stages Water Purification",
        "RO+ZN+CU+ALK+UV",
        "with TDS Regulator",
        "16 Ltr. Storage Tank",
        "Attractive Color Options",
        "Easy Service, Elegant Look",
      ],
      price: "₹25,599/-",
    },
    {
      title: "BRIO MODEL",
      image: Page3,
      features: [
        "12 Stages Purification",
        "RO+ZN+CU+ALK+UV",
        "10 Ltr. Storage Tank",
        "LED Display",
        "Low Maintenance",
        "Cost Effective",
        "Extended Gurantee",
      ],
      price: "₹19,900/-",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={10} justifyContent="center" display={"flex"} flexDirection={"row"}>
        {products.map((product, index) => (
          <Grid item key={index} xs={12} md={6} minWidth={"35vw"} padding={"10px"}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 4,
                boxShadow: 5,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={product.image}
                sx={{ objectFit: "cover" }}
                alt={product.title}
              />
              <CardContent sx={{ p: 3, flexGrow: 1 }}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    color: "#1976d2",
                    textAlign: "center",
                  }}
                >
                  {product.title}
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  Features
                </Typography>

                <List dense sx={{ mb: 2 }}>
                  {product.features.map((feature, idx) => (
                    <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleIcon
                          color={index === 0 ? "primary" : "secondary"}
                          fontSize="small"
                        />
                      </ListItemIcon>
                      <Typography variant="body2">{feature}</Typography>
                    </ListItem>
                  ))}
                </List>

                <Box
                  sx={{
                    bgcolor: index === 0 ? "#1976d2" : "#4caf50",
                    color: "white",
                    mt: "auto",
                    p: 1.5,
                    borderRadius: 2,
                    textAlign: "center",
                    boxShadow: 2,
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {product.price}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomeProducts;
