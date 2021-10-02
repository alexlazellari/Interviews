import React from "react";
import Tip from "../Tip/Tip";
import "./Tips.css";

const Tips = () => {
  const tips = [
    {
      id: new Date().getTime().toString(),
      imgUrl: "./images/socialize_32.png",
      title: "Socialize",
      content: "Get out and meet some friends, or make some new friends.",
    },
    {
      id: new Date().getTime().toString(),
      imgUrl: "./images/challenge_32.png",
      title: "Challenge",
      content: "Add a new goal, challenge or hobby to fill up the time.",
    },
    {
      id: new Date().getTime().toString(),
      imgUrl: "././images/reading_32.png",
      title: "Reading",
      content:
        "Perhaps what you need is some mental stimulation, so read a book!",
    },
  ];
  return (
    <section className="tips">
      {tips.map((tip) => {
        return <Tip key={tip.id} {...tip} />;
      })}
    </section>
  );
};

export default Tips;
