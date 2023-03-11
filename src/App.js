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
  TableContainer,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
} from "@mui/material";
import {
  decreaseCount,
  increaseCount,
  addToCart,
  removeFromCart,
} from "./store/actions/counterAction";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutline } from "@mui/icons-material";
import ListProducts from "./ListProduct";

export default function App() {
  const [cartOpen, setCartOpen] = React.useState(null);
  const open = Boolean(cartOpen);

  const handleOpenCart = (event) => {
    setCartOpen(event.currentTarget);
  };
  const handleCloseCart = () => {
    setCartOpen(null);
  };

  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCount());
  };
  const handleDecrease = () => {
    dispatch(decreaseCount());
  };
  const { daThem } = useSelector((state) => state.daThem);
  const handleAddToCart = (itemProduct) => {
    dispatch(addToCart(itemProduct));
  };
  const handleRemoveFromCart = (itemProduct) => {
    dispatch(removeFromCart(itemProduct));
  };

  // ////////////////////////////////////////////////////////////////////////
  // const [added, setAdded] = React.useState([]);
  // const handleAdded = (value) => {
  //   const arrAdded = [...added, value];
  //   setAdded(arrAdded);
  // };
  // const handleDeleteList = (id) => {
  //   const arrDeleted = [...added];
  //   const index = added.findIndex((el) => el.id === id);
  //   if (index > -1) {
  //     arrDeleted.splice(index, 1);
  //   }
  //   setAdded(arrDeleted);
  // };
  // const handleDelete = (id) => {
  //   const arrAdded = added.filter((item) => item !== id);
  //   setAdded(arrAdded);
  //   handleDeleteList(id);
  // };
  //

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />

            <IconButton onClick={handleOpenCart}>
              <Badge badgeContent={daThem.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            {/* </Box> */}
          </Toolbar>
        </AppBar>
      </Box>
      {/* chi tiết giỏ hàng */}
      <Menu anchorEl={cartOpen} open={open} onClose={handleCloseCart}>
        {(daThem.length > 0 && (
          <TableContainer>
            <Table sx={{ minWidth: 600 }} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell>Sản phẩm</TableCell>
                  <TableCell align="center">Số lượng</TableCell>
                  <TableCell align="right">Tổng giá</TableCell>
                  <TableCell align="right"> </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {daThem.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {(counter > 1 && (
                        <Button onClick={handleDecrease}>-</Button>
                      )) || <Button disabled>-</Button>}

                      <Typography sx={{ paddingLeft: 1, paddingRight: 1 }}>
                        {counter}
                      </Typography>
                      <Button onClick={handleIncrease}>+</Button>
                    </TableCell>
                    <TableCell align="right">
                      {row.price} * {counter}
                    </TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleRemoveFromCart(row.id)}>
                        <DeleteOutline color="error" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell />
                  <TableCell />
                  <TableCell align="center">Tổng cộng</TableCell>
                  <TableCell align="right">100.000đ</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )) || (
          <MenuItem>
            <Typography>Chưa có sản phẩm nào được thêm.</Typography>
          </MenuItem>
        )}
      </Menu>
      {/* Danh sách sản phẩm */}
      <ListProducts added={daThem} handleAdded={handleAddToCart} />
    </>
  );
}
