import React from "react";

import { products } from "./data/product";
import PropTypes from "prop-types";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Menu,
  Toolbar,
  Typography,
  MenuItem,
} from "@mui/material";
function ListProducts({ added, handleAdded }) {
  return (
    <Container>
      <Box sx={{ my: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2} display="flex" justifyContent="center">
              {products.map((item) => (
                <Grid key={item.name} item>
                  <Card
                    sx={{
                      height: 280,
                      width: 180,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    }}
                  >
                    <CardMedia component="img" height="150" image={item.img} />
                    <CardContent>
                      <Grid
                        container
                        spacing={1}
                        display="flex"
                        justifyContent="center"
                      >
                        <Grid item>
                          <Typography variant="body2" color="text.secondary">
                            {item.name}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography color="error" variant="body2">
                            {item.price}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <CardActions disableSpacing>
                            {added.findIndex(
                              (itemAdd) => itemAdd.name === item.name
                            ) !== -1 ? (
                              <Button>Đã thêm</Button>
                            ) : (
                              <Button onClick={() => handleAdded(item)}>
                                Thêm
                              </Button>
                            )}
                          </CardActions>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
ListProducts.propTypes = {
  added: PropTypes.array,
  handleAdded: PropTypes.func,
};
export default function App() {
  const [cartOpen, setCartOpen] = React.useState(null);
  const open = Boolean(cartOpen);

  const handleOpenCart = (event) => {
    setCartOpen(event.currentTarget);
  };
  const handleCloseCart = () => {
    setCartOpen(null);
  };
  const [added, setAdded] = React.useState([]);
  const handleAdded = (value) => {
    const arrAdded = [...added, value];
    setAdded(arrAdded);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            {/* <Box
              sx={{ display: { xs: "flex", md: "flex" } }}
              open={() => setCartOpen(true)}
            > */}
            <IconButton onClick={handleOpenCart}>
              <Badge badgeContent={added.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            {/* </Box> */}
          </Toolbar>
        </AppBar>
      </Box>
      {/* chi tiết giỏ hàng */}
      <Menu anchorEl={cartOpen} open={open} onClose={handleCloseCart}>
        {added.map((item) => (
          <MenuItem key={item.name}>{item.name}</MenuItem>
        ))}
        {/* <MenuItem>ABC</MenuItem> */}
      </Menu>
      {/* Danh sách sản phẩm */}
      <ListProducts added={added} handleAdded={handleAdded} />
    </>
  );
}
