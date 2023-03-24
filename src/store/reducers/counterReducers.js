import { products } from "../../data/product";
import { DESCREASE_COUNT, INCREASE_COUNT } from "../constants/actionTypes";
const initialState = {
  counter: 1,
  cartProduct: products,
};
const counterReducers = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      const newCars = state.cartProduct.map((obj) => {
        if (obj.id === action.id) {
          return {
            ...obj,
            quality: obj.quality + 1,
          };
        } else {
          return { ...obj };
        }
      });
      console.log("newCars", newCars);

      return { cartProduct: newCars };
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
