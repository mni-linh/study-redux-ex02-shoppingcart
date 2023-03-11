import { products } from "../../data/product";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/actionTypes";
const initialState = {
  cartProduct: [],
  products: products,
};
const cartProductReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartProduct: [...state.cartProduct, action.item],
      };
    case REMOVE_FROM_CART:
      return {
        cartProduct: state.cartProduct.filter(
          (item) => item.id !== action.item
        ),
      };

    default:
      return state;
  }
};

export default cartProductReducers;
