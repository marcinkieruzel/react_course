import { Reducer } from "react";

import {
  CartAction,
  CartActionNames,
  CartState,
} from "./cart-context.interface";

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
  }

  return state;
};

export default reducer;
