import {
  INCREASE_COUNT,
  DESCREASE_COUNT,
  ADD_TO_CART,
} from "../constants/actionTypes";

const increaseCount = (id) => {
  return {
    type: INCREASE_COUNT,
    id,
  };
};

const decreaseCount = (id) => {
  return {
    type: DESCREASE_COUNT,
    id,
  };
};

const addToCart = (itemProduct) => {
  return {
    type: ADD_TO_CART,
    item: itemProduct,
  };
};

export { increaseCount, decreaseCount, addToCart };
