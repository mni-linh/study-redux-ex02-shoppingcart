import { combineReducers } from "redux";
import myReducer from "./counterReducers";
const rootReducer = combineReducers({
  counter: myReducer,
  daThem: myReducer,
  xoa: myReducer,
});
export default rootReducer;
