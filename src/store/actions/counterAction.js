import {
  INCREASE_COUNT,
  DESCREASE_COUNT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../constants/actionTypes";

const increaseCount = () => {
  return {
    type: INCREASE_COUNT,
  };
};

const decreaseCount = () => {
  return {
    type: DESCREASE_COUNT,
  };
};
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

export { increaseCount, decreaseCount, addToCart, removeFromCart };
