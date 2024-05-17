import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const home = () => {
  return (
    <main className="home main">
      <header className="main__header">
        <h1 className="main__title">
          Welcome to <em className="bored">Bored Website</em>{" "}
        </h1>
        <picture className="home__picture">
          <source srcSet="./images/boredWebsite_64.png" />
          <img src="./images/boredWebsite_64.png" alt="bored website logo" />
        </picture>
      </header>

      <section className="home__section">
        <p className="home__content">
          <em>Feeling bored</em> could signify that you need to{" "}
          <strong>make some changes</strong> and find ways to relieve stressors
          in your life. Try some new <strong>hobbies</strong>, join a fun
          className with a friend, and find ways to switch up your daily
          routine. Maybe on your lunch break, you start going for walks. Or you
          try studying in a different location like a coffee shop instead of the
          library. You could initiate a new strategy at work with your team,
          like having a fun brainstorming sesh in the middle of the week to get
          some fresh ideas.
          <span className="home-content__span">
            Often, we need to try things out of the ordinary to help stimulate
            our minds and spark our interest again.
          </span>
          <br />
          <br />
          <br />
          <em>
            On our website, we suggest many activities, which you can do when
            you feel bored. So feel free to click the button below to{" "}
            <strong>escape from boredom</strong>.
          </em>
        </p>
      </section>
      <div className="home__actions">
        <Link className="home__action" to="/activities">
          GET NEXT ACTIVITY
        </Link>
      </div>
    </main>
  );
};

export default home;
