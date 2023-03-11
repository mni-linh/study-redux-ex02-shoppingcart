import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/actionTypes";

const addToCart = (itemProduct) => {
  return {
    type: ADD_TO_CART,
    item: itemProduct,
  };
};
const removeFromCart = (itemProduct) => {
  return {
    type: REMOVE_FROM_CART,
    item: itemProduct,
  };
};

export { addToCart, removeFromCart };
