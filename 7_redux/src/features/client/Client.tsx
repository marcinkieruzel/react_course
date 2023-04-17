import React from "react";

type Props = {};

const Client: React.FC<Props> = ({}): JSX.Element => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Name and last name</h5>
        <p className="card-text">Current client balance: 0</p>
        <hr />

        <form>
          <div className="form-group">
            <label htmlFor="loanAmount">Amount</label>
            <input
              type="number"
              className="form-control"
              id="loanAmount"
              aria-describedby=""
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Take out a loan
          </button>
        </form>
        <hr />

        <form>
          <div className="form-group">
            <label htmlFor="depositAmount">Deposit</label>
            <input
              type="number"
              className="form-control"
              id="depositAmount"
              aria-describedby=""
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Deposit money
          </button>
        </form>
      </div>
    </div>
  );
};

export default Client;
