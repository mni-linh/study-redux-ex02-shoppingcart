import { combineReducers } from "redux";
import counterReducers from "./counterReducers";
import productsReducers from "./productsReducers";
const rootReducer = combineReducers({
  counter: counterReducers,
  products: productsReducers,
});
export default rootReducer;
