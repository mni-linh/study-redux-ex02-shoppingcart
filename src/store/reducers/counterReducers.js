import { products } from "../../data/product";
import { DESCREASE_COUNT, INCREASE_COUNT } from "../constants/actionTypes";
const initialState = {
  counter: 1,
  cartProduct: products,
};
const counterReducers = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      const updateCartQuantity = state.cartProduct.map((obj) => {
        if (obj.id === action.id) {
          return {
            ...obj,
            quantity: obj.quantity + 1,
          };
        } else {
          return { ...obj };
        }
      });
      console.log("updateCartQuantity", updateCartQuantity);
      console.log("cartProducts", state.cartProduct);

      return {
        cartProduct: updateCartQuantity,
      };

    case DESCREASE_COUNT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default counterReducers;
