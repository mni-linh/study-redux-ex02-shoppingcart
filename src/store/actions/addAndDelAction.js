import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/actionTypes";

const addToCart = (itemProduct) => {
  return {
    type: ADD_TO_CART,
    item: itemProduct,
    // firstQuantity: itemProduct.quantity + 1,
  };
};
const removeFromCart = (itemProduct) => {
  return {
    type: REMOVE_FROM_CART,
    item: itemProduct,
  };
};

export { addToCart, removeFromCart };
