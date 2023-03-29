import { products } from "../../data/product";
import {
  ADD_TO_CART,
  DESCREASE_COUNT,
  INCREASE_COUNT,
} from "../constants/actionTypes";
const initialState = {
  counter: 1,
  listProducts: products, // Mảng danh sách tất cả sản phẩm
  listCartProducts: [], // Mảng danh sách sản phẩm đã thêm vào giỏ hàng
};
const counterReducers = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      const updateQuantityListProducts = state.listProducts.map((obj) => {
        if (obj.id === action.id) {
          return {
            ...obj,
            quantity: obj.quantity + 1,
          };
        } else {
          return { ...obj };
        }
      });
      const updateQuantityListCartProducts = state.listCartProducts.map(
        (item) => {
          if (item.id === action.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return { ...item };
          }
        }
      );

      return {
        listProducts: updateQuantityListProducts,
        listCartProducts: updateQuantityListCartProducts,
      };

    case DESCREASE_COUNT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case ADD_TO_CART:
      return {
        ...state,
        listCartProducts: [...state.listCartProducts, action.item],
        listProducts: state.listProducts.filter(
          (item) => item.id !== action.item
        ),
      };
    default:
      return state;
  }
};

export default counterReducers;
