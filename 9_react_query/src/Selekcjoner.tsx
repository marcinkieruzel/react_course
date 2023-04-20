import React from "react";

type Props = {};

const Selekcjoner = ({}: Props): JSX.Element => {
  return (
    <section className="container">
      <form>
        <div className="form-group">
          <label htmlFor="photo">Zdjęcie</label>
          <input
            type="text"
            className="form-control"
            id="photo"
            placeholder="Zdjęcie"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Imię i nazwisko</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Imię i nazwisko"
          />
        </div>
        <div className="form-group">
          <label htmlFor="club">Klub</label>
          <input
            type="text"
            className="form-control"
            id="club"
            placeholder="Klub"
          />
        </div>
        <div className="form-group">
          <label htmlFor="heightWeight">Waga/Wzrost</label>
          <input
            type="text"
            className="form-control"
            id="heightWeight"
            placeholder="Waga/Wzrost"
          />
        </div>

        <div className="form-group">
          <label htmlFor="matchesGoals">Mecze/Gole</label>
          <input
            type="text"
            className="form-control"
            id="matchesGoals"
            placeholder="Mecze/Gole"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dayOfBirth">Data urodzenia</label>
          <input
            type="date"
            className="form-control"
            id="dayOfBirth"
            placeholder="Data urodzenia"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Selekcjoner;
