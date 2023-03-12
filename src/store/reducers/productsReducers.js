import { products } from "../../data/product";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/actionTypes";
const initialState = {
  listProducts: products, // Danh sách các sản phẩm (áp dụng client)
  listCartProducts: [], // Danh sách các sản phẩm trong giỏ hàng
};
const cartProductReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        listCartProducts: [...state.listCartProducts, action.item],
        // products: [...state.products.filter((item) => item.id !== action.item)],
        // action.item.quality: action.item.quality + 1,
      };
    case REMOVE_FROM_CART:
      return {
        listCartProducts: state.listCartProducts.filter(
          (item) => item.id !== action.item
        ),
      };

    default:
      return state;
  }
};

export default cartProductReducers;
