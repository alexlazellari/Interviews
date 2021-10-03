import React from "react";
import Tips from "../../components/Tips/Tips";
import Table from "../../components/Table/Table";

const Activities = () => {
  return (
    <main className="main">
      <header className="main__header">
        <h1 className="main__title main__title--orange">Tips</h1>
        <p className="main__subtitle">
          Here are some tricks to help expose the real culprit behind a feeling
          of boredom and get back to your usual self:
        </p>
      </header>
      <Tips />
      <header className="main__header">
        <h1 className="main__title main__title--orange">Activity list</h1>
        <p className="main__subtitle">
          The activity list is where our suggestions for escaping boredom will
          be. In addition, there are fields like the number of participants that
          help you take your entertainment to a different level of enjoyment!
        </p>
      </header>
      <Table />
    </main>
  );
};

export default Activities;
