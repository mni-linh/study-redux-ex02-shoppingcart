import { Co2Sharp } from "@mui/icons-material";
import { products } from "../../data/product";
import {
  DESCREASE_COUNT,
  INCREASE_COUNT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../constants/actionTypes";
const initialState = {
  counter: 1,
  daThem: [],
};
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DESCREASE_COUNT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case ADD_TO_CART:
      return {
        ...state,
        daThem: [...state.daThem, action.item],
      };
    case REMOVE_FROM_CART:
      return {
        daThem: state.daThem.filter((item) => item.id !== action.item),
      };

    default:
      return state;
  }
};

export default myReducer;
