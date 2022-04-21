import {
  FULLSCREEN_IS_TRUE,
  FULLSCREEN_IS_FALSE,
  CHANGING_VALUES,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INC_QTY,
  DEC_QTY,
  SET_CHECKOUT_ALERT,
  CLOSE_CHECKOUT_ALERT,
} from "./types";
export const largeScreen = () => {
  return {
    type: FULLSCREEN_IS_TRUE,
  };
};
export const smallScreen = () => {
  return {
    type: FULLSCREEN_IS_FALSE,
  };
};
export const handleChange = (value) => {
  return {
    type: CHANGING_VALUES,
    payload: value,
  };
};
export const addToCart = (product, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: { ...product, quantity },
  };
};
export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: { id },
  };
};
export const incrementQuantity = (product) => {
  return {
    type: INC_QTY,
    payload: product,
  };
};
export const decrementQuantity = (product) => {
  return {
    type: DEC_QTY,
    payload: product,
  };
};
export const setCheckoutAlert = () => {
  return {
    type: SET_CHECKOUT_ALERT,
  };
};
export const closeCheckoutAlert = () => {
  return {
    type: CLOSE_CHECKOUT_ALERT,
  };
};
