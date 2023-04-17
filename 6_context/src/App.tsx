import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Tables from "./Tables";

function App() {
  return (
    <Router>
      <div className="container">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tables">Tables</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tables" element={<Tables />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
