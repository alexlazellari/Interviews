import React from "react";
import Tips from "../../components/Tips/Tips";
import "./Activities.css";

const activities = () => {
  return (
    <main className="main">
      <header className="main__header">
        <h1 className="main__title main__title--orange">Tips</h1>
        <h5 className="main__subtitle">
          Here are some tricks to help expose the real culprit behind a feeling
          of boredom and get back to your usual self:
        </h5>
      </header>
      <Tips />
      <header className="main__header">
        <h1 className="main__title main__title--orange">Activity list</h1>
        <h5 className="main__subtitle">
          The activity list is where our suggestions for escaping boredom will
          be. In addition, there are fields like the number of participants that
          help you take your entertainment to a different level of enjoyment!
        </h5>
      </header>
      <section className="main__section">
        <table className="activities">
          <thead className="activities__head">
            <th className="activities__header">Activity</th>
            <th className="activities__header">Type</th>
            <th className="activities__header">Participants</th>
          </thead>
          <tbody className="activities__body"></tbody>
        </table>
      </section>

      <div className="main__actions">
        <button type="button" className="main__action btn">
          GET NEXT ACTIVITY
        </button>
      </div>
    </main>
  );
};

export default activities;
