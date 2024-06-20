import { Property } from "../../interfaces/Property.interface";

export interface CartState {
  cart: Property[];
  properties: Property[];
}

export enum CartActionNames {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  ADD_PROPERTIES = "ADD_PROPERTIES",
  RESET_PROPERTIES = "RESET_PROPERTIES",
}

export type CartAction =
  | {
      type: CartActionNames.ADD_TO_CART;
      payload: Property;
    }
  | {
      type: CartActionNames.REMOVE_FROM_CART;
      payload: Property;
    }
  | {
      type: CartActionNames.ADD_PROPERTIES;
      payload: Property[];
    }
  | {
      type: CartActionNames.RESET_PROPERTIES;
      something?: string;
    };
