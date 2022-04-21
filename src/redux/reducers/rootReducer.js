import { combineReducers } from "redux";
import {
  productsReducer,
  selectValuesReducer,
  fullScreenReducer,
  selectedValueReducer,
  cartItemsReducer,
  alertReducer,
} from "./reducers";
const rootReducer = combineReducers({
  products: productsReducer,
  selectValues: selectValuesReducer,
  fullScreen: fullScreenReducer,
  selectedValue: selectedValueReducer,
  cartItems: cartItemsReducer,
  alert: alertReducer,
});
export default rootReducer;
