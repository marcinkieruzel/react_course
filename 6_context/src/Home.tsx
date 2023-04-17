import React from "react";
import teams from "./teams.json";

type Props = {};

const Home: React.FC<Props> = ({}): JSX.Element => {
  return (
    <div className={"container"}>
      <h1>Add result</h1>
      <form>
        <div className="form-group">
          <label htmlFor="round">Round</label>
          <input type="number" className="form-control" id="round" />
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="host">Host</label>
          <select className="form-control" id="host">
            {teams.map((x) => {
              return <option key={x.id}>{x.name}</option>;
            })}
          </select>
          <label htmlFor="hostGoals">Goals</label>
          <input type="number" className="form-control" id="hostGoals" />
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="guest">Guest</label>
          <select className="form-control" id="guest">
            {teams.map((x) => {
              return <option key={x.id}>{x.name}</option>;
            })}
          </select>
          <label htmlFor="hostGoals">Goals</label>
          <input type="number" className="form-control" id="hostGoals" />
        </div>
        <hr />
        <button type="submit" className="btn btn-primary">
          Add result
        </button>
      </form>
    </div>
  );
};

export default Home;
