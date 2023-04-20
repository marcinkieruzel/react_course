import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <section className={"container"}>
      <div className="row">
        <div className="col-3">
          <div className="card">
            <img
              src="https://pzpn.pl/public/system/images/reprezentacja_players/189/189-mini-1.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Zawodnik</h5>
              <p className="card-text">Klub</p>
              <a href="#" className="btn btn-primary">
                Przejdź do szczegółów
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
