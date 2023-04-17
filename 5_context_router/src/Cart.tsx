import React from "react";
import { Property } from "../interfaces/Property.interface";

type Props = {
  children: React.ReactNode;
};

const Cart: React.FC<Props> = ({ children }): JSX.Element => {

  return <>{children}</>;
};

export default Cart;
