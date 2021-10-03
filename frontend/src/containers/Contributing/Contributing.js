import React, { useState } from "react";
import AlertSuccess from "../../components/Alert/AlertSuccess";
import AlertInfo from "../../components/Alert/AlertInfo";
import "./Contributing.css";

const Contributing = () => {
  const [activity, setActivity] = useState("");
  const [type, setType] = useState("recreational");
  const [participants, setParticipants] = useState("");
  const [isAlert, setIsAlert] = useState(false);
  const [isHideAlert, setIsHideAlert] = useState(true);
  const [message, setMessage] = useState("");

  const types = [
    "education",
    "recreational",
    "social",
    "diy",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork",
  ];

  const contribute = (e) => {
    e.preventDefault();
    const data = {
      activity: activity,
      type: type,
      participants: participants,
    };

    fetch("https://www.boredapi.com/api/suggestion", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          setIsAlert(true);
        } else {
          setIsAlert(false);
        }
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          setIsAlert(true);
        } else {
          setMessage(data.message);
        }
        setIsHideAlert(false);
        setTimeout(() => {
          setIsHideAlert(true);
        }, 4000);
      })
      .catch((error) => console.error(error));
  };

  return (
    <main className="main">
      <header className="main__header">
        <h2 className="main__title">
          Help other people to motivate with your ideas.
        </h2>
        <p className="main__subtitle"></p>
        <p>Listed here are some guidelines to help with your submission: </p>
        <ul className="guidelines">
          <li className="guideline">
            Activities should start with a verb in the form of a command (ex.
            "Research ...", "Invite ...", "Create ...").
          </li>
          <li className="guideline">
            Try to keep the activities general and without references to
            companies or name brand products.
          </li>
        </ul>
      </header>
      <form className="form">
        <fieldset className="form__fieldset">
          <legend className="form__legend">Contributing Form</legend>
          <div className="input-group">
            <label htmlFor="activity">*Activity: </label>
            <br />
            <input
              type="text"
              id="activity"
              placeholder="Watch a classNameic movie"
              value={activity}
              onChange={(e) => {
                setActivity(e.target.value);
              }}
              className="input-group__input"
              minLength="3"
              maxLength="64"
              required
            />
            {/* <span className="input-group__help"></span> */}
          </div>
          <div className="form__select">
            <label htmlFor="select">*Type: </label>
            <br />
            <select
              name="type"
              id="select"
              className="form__select"
              value={type}
              onChange={(e) => {
                setType(e.currentTarget.value);
              }}
              required
            >
              {types.map((type) => {
                return (
                  <option key={type} value={type}>
                    {type}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="participants">*Participants: </label>
            <br />
            <input
              type="number"
              id="participants"
              defaultValue={participants}
              onChange={(e) => {
                setParticipants(e.target.value);
              }}
              placeholder="2"
              min="1"
              max="1000"
              className="input-group__input"
              required
            />
            {/* <span className="input-group__help"></span> */}
          </div>

          <div className="form__actions">
            <button type="submit" className="form__btn" onClick={contribute}>
              Send
            </button>
          </div>
        </fieldset>
        <div className="form__row">
          <details className="form__details">
            <summary className="form__summary">(*) Required Field</summary>
            <p>Fields with the star symbol are required.</p>
          </details>
        </div>
      </form>
      {(() => {
        if (!isAlert && !isHideAlert) {
          return <AlertSuccess message={message} />;
        }
        if (isAlert && !isHideAlert) {
          return <AlertInfo />;
        }
      })()}
    </main>
  );
};

export default Contributing;
