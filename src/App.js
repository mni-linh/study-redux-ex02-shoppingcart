import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Badge,
  Box,
  Button,
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
import { DeleteOutline } from "@mui/icons-material";

import ListCartProducts from "./component/ListCartProducts";

import { useDispatch, useSelector } from "react-redux";

import { removeFromCart } from "./store/actions/addAndDelAction";

import {
  addToCart,
  decreaseCount,
  increaseCount,
} from "./store/actions/counterAction";

export default function App() {
  // state mở / đóng cart product
  const [cartOpen, setCartOpen] = React.useState(null);
  const open = Boolean(cartOpen);

  // mở cart product
  const handleOpenCart = (event) => {
    setCartOpen(event.currentTarget);
  };

  // đóng cart product
  const handleCloseCart = () => {
    setCartOpen(null);
  };

  // Số lượng
  // const { counter } = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  // Tăng
  const handleIncrease = (id) => {
    dispatch(increaseCount(id));
  };
  // Giảm
  const handleDecrease = (id) => {
    dispatch(decreaseCount(id));
  };
  // Thêm vào giỏ hàng
  const handleAddToCart = (itemProduct) => {
    dispatch(addToCart(itemProduct));
  };
  // Xóa khỏi giỏ hàng
  const handleRemoveFromCart = (itemProduct) => {
    dispatch(removeFromCart(itemProduct));
  };
  // Danh sách sản phẩm trong giỏ hàng
  const listCartProducts = useSelector(
    (state) => state.counter.listCartProducts
  );
  // Danh sách tất cả sản phẩm
  const listProducts = useSelector((state) => state.counter.listProducts);
  console.log("listCartProduct", listCartProducts);
  console.log("listProducts", listProducts);
  // const [array, setArray] = React.useState(listCartProducts);
  // React.useEffect(() => {
  //   setArray(listCartProducts);
  // }, [listCartProducts]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton onClick={handleOpenCart}>
              <Badge badgeContent={listCartProducts.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            {/* </Box> */}
            {/* chi tiết giỏ hàng */}
            <Menu anchorEl={cartOpen} open={open} onClose={handleCloseCart}>
              {(listCartProducts.length > 0 && (
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
                      {listCartProducts.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>{row.name}</TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {/* {(counter < 1 && <Button disabled>-</Button>) || ( */}
                            <Button onClick={() => handleDecrease(row.id)}>
                              -
                            </Button>
                            {/* )} */}
                            <Typography
                              sx={{ paddingLeft: 1, paddingRight: 1 }}
                            >
                              {row.quantity}
                            </Typography>
                            <Button onClick={() => handleIncrease(row.id)}>
                              +
                            </Button>
                          </TableCell>
                          <TableCell align="right">
                            {/* {row.price} * {counter} */}
                            10.000đ
                          </TableCell>
                          <TableCell>
                            <IconButton
                              onClick={() => handleRemoveFromCart(row.id)}
                            >
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
          </Toolbar>
        </AppBar>
      </Box>
      {/* Danh sách sản phẩm */}
      <ListCartProducts
        added={listCartProducts}
        handleAdded={handleAddToCart}
        listProducts={listProducts}
      />
    </>
  );
}
