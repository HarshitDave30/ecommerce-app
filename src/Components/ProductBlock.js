import React, { useState, useContext, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Rating from "@mui/material/Rating";
import ProductContext from "./ProductContext";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const review = [
  {
    badge: "H",
    name: "Harsh",
    rating: 4,
    reviewtext:
      "body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
  },
  {
    badge: "A",
    name: "Ankita",
    rating: 5,
    reviewtext:
      "body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
  },
  {
    badge: "S",
    name: "Shital",
    rating: 3,
    reviewtext:
      "body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
  },
];

export default function ProductBlock() {
  const [value, setValue] = useState(4);

  const viewproduct = useContext(ProductContext);

  useEffect(() => {
    window.localStorage.setItem("viewproduct", JSON.stringify(viewproduct));
  }, [viewproduct]);

  return (
    <>
      <Container fixed>
        <Grid sx={{ marginBottom: 5 }} item xs={12} md={4}></Grid>
        <Typography gutterBottom variant="h4" component="div">
          Product Description
        </Typography>
        <Grid container spacing={2}>
          {[viewproduct].map((e, index) => {
            return (
              <React.Fragment key={index}>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="100%"
                      image={e.image}
                      alt="Product Image"
                    />
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {e.type}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="text.secondary"
                    >
                      {e.details}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontWeight: 700 }}
                    >
                      SIZE : {e.size}
                    </Typography>
                    <Rating name="read-only" value={value} readOnly />
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{ fontWeight: 700, marginBottom: 2 }}
                    >
                      BUY NOW
                    </Button>
                  </CardActions>
                </Grid>
              </React.Fragment>
            );
          })}
          <Grid item xs={12} md={12}>
            <Typography gutterBottom variant="h4" component="div">
              Product Review
            </Typography>
            {review.map((element, index) => {
              return (
                <React.Fragment key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginBottom: 2,
                    }}
                  >
                    <Paper sx={{ padding: 2, width: "100%" }}>
                      <Avatar>{element.badge}</Avatar>
                      <Typography gutterBottom variant="h6" component="div">
                        {element.name}
                      </Typography>
                      <Rating
                        name="read-only"
                        value={element.rating}
                        readOnly
                      />
                      <Typography variant="body2" gutterBottom>
                        {element.reviewtext}
                      </Typography>
                    </Paper>
                  </Box>
                </React.Fragment>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
