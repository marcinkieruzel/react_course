import React from "react";

type Props = {};

const AddClient: React.FC<Props> = ({}): JSX.Element => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Client name">Email address</label>
        <input
          type="text"
          className="form-control"
          id="Client name"
          aria-describedby="clientName"
        />
        <small id="emailHelp" className="form-text text-muted">
          Must be uniq
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="initialBalance">Client initial balance</label>
        <input type="number" className="form-control" id="initialBalance" />
      </div>
      <button type="submit" className="btn btn-primary">
        Add client
      </button>
    </form>
  );
};

export default AddClient;
