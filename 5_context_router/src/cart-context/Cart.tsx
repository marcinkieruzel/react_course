import React, { useEffect } from "react";
import { Property } from "../../interfaces/Property.interface";
import reducer from "./reducer";
import { CartAction, CartState } from "./cart-context.interface";
import { createSelector } from "reselect";

type Props = {
  children: React.ReactNode;
};

const initialState = {
  cart: [],
  properties: [],
};

const CartContext = React.createContext<{
  cart: Property[];
  properties: Property[];
}>(initialState);

const CartDispatchContext = React.createContext<React.Dispatch<CartAction>>(
  () => {}
);

const Cart: React.FC<Props> = ({ children }): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

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

export const getProperties = (state: CartState) => state.properties;
export const getCart = (state: CartState) =>
  state.cart.sort((a: Property, b: Property) => a.id - b.id);

export const getPropertiesMemo = createSelector(
  [getProperties],
  (properties) => {
    return properties;
  }
);

export const getCartMemo = createSelector([getCart], (cart) => {
  console.log("Selector called");
  return cart;
});

export const useCartMemoData = () => {
  const cart = useCartContext();

  console.log("Cart memo data", cart);

  return getCartMemo(cart);
};
