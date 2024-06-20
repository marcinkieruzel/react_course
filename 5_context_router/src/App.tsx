import { useEffect, useState } from "react";
import "./App.css";
import SingleProperty from "./components/SingleProperty";
import { set } from "lodash";
import { Property } from "../interfaces/Property.interface";
import { Link } from "react-router-dom";
import useSwr from "swr";
import { useCartContext, useDispatchCart } from "./cart-context/Cart";
import { CartActionNames } from "./cart-context/cart-context.interface";

function App() {
  const dispatch = useDispatchCart();
  const { properties } = useCartContext();

  // const [properties, setProperties] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   setLoading(true);
  //   setError("");
  //   fetch("http://localhost:3001/properties")
  //     .then((res) => res.json())
  //     .then((data) => setProperties(data))
  //     .catch((err) => setError(err.message))
  //     .finally(() => setLoading(false));
  // }, []);

  const { data, error } = useSwr<Property[]>(
    "http://localhost:3001/properties",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    // TODO: Fetch data from API and pass the to the context

    if (data) {
      dispatch({ type: CartActionNames.ADD_PROPERTIES, payload: data });
    } else {
      dispatch({ type: CartActionNames.RESET_PROPERTIES });
    }
  }, [data, dispatch]);

  return (
    <section className="container">
      <div className="row">
        {!data && !error && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {(properties || []).map((property: Property) => (
          <div className="col-4" key={property.id}>
            <div className="card">
              {typeof property.thumb === "string" && (
                <img
                  className="card-img-top"
                  src={property.thumb}
                  alt="Card image cap"
                />
              )}

              <div className="card-body">
                <h5 className="card-title">{property.title}</h5>
                <p
                  className="card-text"
                  dangerouslySetInnerHTML={{ __html: property.excerpt }}
                ></p>
                {/* <a href="#" className="btn btn-primary">
                  Go somewhere
                </a> */}
                <Link
                  to={`/property/${property.id}`}
                  className="btn btn-primary"
                >
                  View Property
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
