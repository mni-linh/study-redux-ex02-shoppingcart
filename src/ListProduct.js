import React from "react";
import { products } from "./data/product";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

export default function ListProducts({ added, handleAdded }) {
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
                              <Button variant="contained" disabled>
                                Đã thêm
                              </Button>
                            ) : (
                              <Button
                                variant="contained"
                                onClick={() => handleAdded(item)}
                              >
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
