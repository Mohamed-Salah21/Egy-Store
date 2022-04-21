import apis from "../../components/apis";
import {
  ADD_TO_CART,
  CHANGING_VALUES,
  DEC_QTY,
  FULLSCREEN_IS_FALSE,
  FULLSCREEN_IS_TRUE,
  INC_QTY,
  REMOVE_FROM_CART,
  SET_CHECKOUT_ALERT,
  CLOSE_CHECKOUT_ALERT,
} from "../actions/types";

const { products, selectValues } = apis;

export const productsReducer = (state = products) => {
  return state;
};
export const selectValuesReducer = (state = selectValues) => {
  return state;
};
export const fullScreenReducer = (state = true, { type }) => {
  switch (type) {
    case FULLSCREEN_IS_FALSE:
      return (state = false);
    case FULLSCREEN_IS_TRUE:
      return (state = true);
    default:
      return state;
  }
};
export const selectedValueReducer = (
  state = { val: "all" },
  { type, payload }
) => {
  switch (type) {
    case CHANGING_VALUES:
      return {
        ...state,
        val: payload,
      };
    default:
      return state;
  }
};
const initialCart = {
  cart: [],
};
export const cartItemsReducer = (state = initialCart, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
        quantity: (payload.quantity = 1),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };
    case INC_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.id && payload.quantity < 7
            ? {
                ...payload,
                quantity: payload.quantity + 1,
              }
            : item
        ),
      };
    case DEC_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.id && payload.quantity > 1
            ? {
                ...payload,
                quantity: payload.quantity - 1,
              }
            : item
        ),
      };
    default:
      return state;
  }
};

export const alertReducer = (state = { setting: false }, { type }) => {
  switch (type) {
    case SET_CHECKOUT_ALERT:
      return {
        ...state,
        setting: (state.setting = true),
      };
    case CLOSE_CHECKOUT_ALERT:
      return (window.location.href = "/");
    default:
      return state;
  }
};
