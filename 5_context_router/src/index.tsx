import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Cart from "./cart-context/Cart";
import App from "./App";
import SingleProperty from "./components/SingleProperty";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

enum RoutesEnum {
  HOME = "/",
  PROPERTY = "/property/:id"
}




root.render(
  // <React.StrictMode>
  <Cart>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={RoutesEnum.HOME} element={<App />} />
          <Route path={RoutesEnum.PROPERTY} element={<SingleProperty />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </Cart>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
