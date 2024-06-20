import { Reducer } from "react";
import { produce } from "immer";

import {
  CartAction,
  CartActionNames,
  CartState,
} from "./cart-context.interface";
import { uniqBy } from "lodash";

const reducer: Reducer<CartState, CartAction> = (state, action) => {
  switch (action.type) {
    case CartActionNames.ADD_PROPERTIES: {
      return produce(state, (draft) => {
        draft.properties = action.payload;
      });
    }
    case CartActionNames.RESET_PROPERTIES: {
      return produce(state, (draft) => {
        draft.properties = [];
      });
    }
    case CartActionNames.ADD_TO_CART: {
      return produce(state, (draft) => {
        draft.cart = uniqBy([...draft.cart, action.payload], (x) => x.id);
      });
    }
    case CartActionNames.REMOVE_FROM_CART: {
      return produce(state, (draft) => {
        draft.cart = draft.cart.filter((x) => x.id !== action.payload.id);
      });
    }
    case CartActionNames.RESET_CART: {
      return produce(state, (draft) => {
        draft.cart = [];
      });
    }
    case CartActionNames.SORT_PROPERTIES: {
      return produce(state, (draft) => {
        draft.properties = draft.properties.sort(
          (a, b) => a?.fields?.price - b?.fields?.price
        );
      });
    }
    case CartActionNames.CHANGE_CART: {
      state.cart[0].title = "Changed title";

      return {
        ...state,
        cart: state.cart.map((x, i) => {
          if (i === 0) {
            return { ...x, title: "Changed title" };
          }
          return x;
        }),
      };
    }
  }
};

export default reducer;
