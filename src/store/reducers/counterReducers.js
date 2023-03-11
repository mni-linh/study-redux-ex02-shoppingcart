import {
  DESCREASE_COUNT,
  INCREASE_COUNT,
} from "../constants/actionTypes";
const initialState = {
  counter: 0,
  cartProduct: [],
};
const counterReducers = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default counterReducers;
