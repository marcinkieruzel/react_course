import React, { useEffect } from "react";
import AddClient from "./features/addClient/AddClient";
import BankBalance from "./features/bankBalance/bankBalance";
import Client from "./features/client/Client";


function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      // perform action
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      <h1>Bank simulator</h1>
      <BankBalance />
      <AddClient />
      <hr />
      <div className="row">
        <div className="col-4">
          <Client />
        </div>
      </div>
    </div>
  );
}

export default App;


