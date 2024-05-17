import React, { useMemo } from "react";
import Tip from "../Tip/Tip";
import "./Tips.css";

const Tips = () => {
  const tips = useMemo(() => {
    return [
      {
        id: 1,
        imgUrl: "./images/socialize_32.png",
        title: "Socialize",
        content: "Get out and meet some friends, or make some new friends.",
      },
      {
        id: 2,
        imgUrl: "./images/challenge_32.png",
        title: "Challenge",
        content: "Add a new goal, challenge or hobby to fill up the time.",
      },
      {
        id: 3,
        imgUrl: "././images/reading_32.png",
        title: "Reading",
        content:
          "Perhaps what you need is some mental stimulation, so read a book!",
      },
    ];
  }, []);

  return (
    <section className="tips">
      {tips.map((tip) => {
        return <Tip key={tip.id} {...tip} />;
      })}
    </section>
  );
};

export default Tips;
