import React from "react";

type Props = {};

const BankBalance: React.FC<Props> = ({}): JSX.Element => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Bank</h5>
        <p className="card-text">Current bank balance: 0</p>
        <p className="card-text">Number of deposits: 0</p>
        <p className="card-text">Number of loans: 0</p>
        <p className="card-text">Number of clients: 0</p>
        <hr />
      </div>
    </div>
  );
};

export default BankBalance;
