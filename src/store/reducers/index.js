import { combineReducers } from "redux";
import cartProductReducers from "./cartProductReducers";
import counterReducers from "./counterReducers";
const rootReducer = combineReducers({
  counter: counterReducers,
  cartProduct: cartProductReducers,
});
export default rootReducer;
