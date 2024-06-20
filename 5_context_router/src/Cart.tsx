import React, { useEffect } from "react";
import { Property } from "../interfaces/Property.interface";

type Props = {
  children: React.ReactNode;
};

export interface CartState {
  cart: Property[];
}

const initialState = {
  cart: [],
};

const CartContext = React.createContext<{
  cart: Property[];
}>(initialState);

const CartDispatchContext = React.createContext<React.Dispatch<any>>(() => {});

const Cart: React.FC<Props> = ({ children }): JSX.Element => {
  const [state, dispatch] = React.useReducer(
    (state: CartState, action: any) => {
      return state;
    },
    initialState
  );

  useEffect(() => {
    console.log("State changed", state);
  }, [state]);

  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};

export default Cart;

export const useCartContext = () => {
  const cart = React.useContext(CartContext);
  if (cart === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return cart;
};

export const useDispatchCart = () => {
  const dispatch = React.useContext(CartDispatchContext);
  if (dispatch === undefined) {
    throw new Error("useDispatchCart must be used within a CartProvider");
  }

  return dispatch;
};
