import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext, useDispatchCart } from "../cart-context/Cart";
import { CartActionNames } from "../cart-context/cart-context.interface";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }): JSX.Element => {
  const [expand, setExpand] = useState(false);

  const state = useCartContext();
  const dispatch = useDispatchCart();

  console.log("state", state, dispatch);

  return (
    <main>
      <header>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/property/83576">
                    Default Property
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => {
                      dispatch({ type: CartActionNames.RESET_CART });
                    }}
                    className="btn btn-warning"
                  >
                    RESET CART
                  </button>
                </li>
                <li className="nav-tem">
                  <div className="dropdown">
                    <a
                      className="btn btn-secondary dropdown-toggle"
                      onClick={() => setExpand((prev) => !prev)}
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Cart
                    </a>

                    <div
                      className={`dropdown-menu ${expand && "show"}`}
                      aria-labelledby="dropdownMenuLink"
                    >
                      {/* <a className="dropdown-item">ITEM</a> */}

                      {state?.cart.map((property) => {
                        return (
                          <div className="dropdown-item" key={property.id}>
                            {property.title}
                            <button
                              onClick={() => {
                                dispatch({
                                  type: CartActionNames.REMOVE_FROM_CART,
                                  payload: property,
                                });
                              }}
                            >
                              x
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {children}
    </main>
  );
};

export default Layout;
