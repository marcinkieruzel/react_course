import React from "react";
import teams from "./teams.json";

type Props = {};

const Tables: React.FC<Props> = ({}): JSX.Element => {
  return (
    <div className={"container"}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Team</th>
            <th scope="col">Goals</th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((x, i) => {
            return (
              <tr key={i}>
                <th scope="row">{x.id}</th>
                <td>{x.name}</td>
                <td></td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
