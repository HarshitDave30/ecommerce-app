import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { content } from "./Content";
import Search from "./Search";
import Size from "./Size";
import CartModal from "./CartModal";
import { Link } from "react-router-dom";

export default function Cards({ setCartvalue, cartvalue, setViewproduct }) {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [activeid, setActiveid] = useState(0);
  const [product, setProduct] = useState(content);

  const handleClick = (e) => {
    setOpen(true);

    if (!cart.includes(e.id)) {
      setCartvalue(cartvalue + 1);
    }

    if (cart.filter((x) => x === activeid).length < 2) {
      setCart([...cart, e.id]);
    }
    setActiveid(e.id);
  };

  const productClick = (e) => {
    setViewproduct(e);
    localStorage.setItem("item", JSON.stringify(e));
  };

  return (
    <Container fixed>
      <Grid sx={{ marginBottom: 5 }} item xs={12} md={4}>
        <Search setProduct={setProduct} />
        <Size setProduct={setProduct} />
      </Grid>
      <Typography gutterBottom variant="h4" component="div">
        {product.length} Products Found
      </Typography>
      <Grid container spacing={2}>
        {product.map((element, index) => {
          return (
            <React.Fragment key={index}>
              <Grid item xs={12} md={4}>
                <Card>
                  <CardMedia
                    sx={{ height: 400 }}
                    image={element.image}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {element.type}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="text.secondary"
                    >
                      {element.details}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontWeight: 700 }}
                    >
                      SIZE : {element.size}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ fontWeight: 700, marginBottom: 2 }}
                      onClick={() => handleClick(element)}
                    >
                      ADD TO CART
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => productClick(element)}
                      sx={{ fontWeight: 700, marginBottom: 2 }}
                    >
                      <Link to="/product-view">VIEW PRODUCT</Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </React.Fragment>
          );
        })}

        <CartModal
          open={open}
          setOpen={setOpen}
          cart={cart}
          activeid={activeid}
        />
      </Grid>
    </Container>
  );
}
