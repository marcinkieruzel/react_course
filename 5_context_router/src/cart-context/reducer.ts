import { Reducer } from "react";

import {
  CartAction,
  CartActionNames,
  CartState,
} from "./cart-context.interface";
import { uniqBy } from "lodash";

const reducer: Reducer<CartState, CartAction> = (state, action) => {
  switch (action.type) {
    case CartActionNames.ADD_PROPERTIES: {
      return {
        ...state,
        properties: action.payload,
      };
    }
    case CartActionNames.RESET_PROPERTIES: {
      return {
        ...state,
        properties: [],
      };
    }
    case CartActionNames.ADD_TO_CART: {
      return {
        ...state,
        cart: uniqBy([...state.cart, action.payload], (x) => x.id),
      };
    }
    case CartActionNames.REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== action.payload.id),
      };
    }
    case CartActionNames.RESET_CART: {
      return {
        ...state,
        cart: [],
      };
    }
  }
};

export default reducer;
