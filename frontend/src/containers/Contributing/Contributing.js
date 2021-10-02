import React from "react";
import "./Contributing.css";

const Contributing = () => {
  return (
    <main class="main">
      <header class="main__header">
        <h2 class="main__title">
          Help other people to motivate with your ideas.
        </h2>
        <p class="main__subtitle"></p>
        <p>Listed here are some guidelines to help with your submission: </p>
        <ul class="guidelines">
          <li class="guideline">
            Activities should start with a verb in the form of a command (ex.
            "Research ...", "Invite ...", "Create ...").
          </li>
          <li class="guideline">
            Try to keep the activities general and without references to
            companies or name brand products.
          </li>
        </ul>
      </header>
      <form class="form">
        <fieldset class="form__fieldset">
          <legend class="form__legend">Contributing Form</legend>
          <div class="input-group">
            <label for="activity">*Activity: </label>
            <br />
            <input
              type="text"
              id="activity"
              placeholder="Watch a classic movie"
              value=""
              class="input-group__input"
              minlength="3"
              maxlength="64"
              required
            />
            {/* <span class="input-group__help"></span> */}
          </div>
          <div class="form__select">
            <label for="select">*Type: </label>
            <br />
            <select name="type" id="select" required>
              <option value="education">Education</option>
              <option value="recreational" selected>
                Recreational
              </option>
              <option value="social">Social</option>
              <option value="diy">DIY</option>
              <option value="charity">Charity</option>
              <option value="cooking">Cooking</option>
              <option value="relaxation">Relaxation</option>
              <option value="music">Music</option>
              <option value="busywork">Busywork</option>
            </select>
          </div>
          <div class="input-group">
            <label for="participants">*Participants: </label>
            <br />
            <input
              type="number"
              id="participants"
              placeholder="2"
              value=""
              min="1"
              max="1000"
              class="input-group__input"
              required
            />
            {/* <span class="input-group__help"></span> */}
          </div>

          <div class="form__actions">
            <button type="submit" class="form__btn">
              Send
            </button>
          </div>
        </fieldset>
        <div class="form__row">
          <details class="form__details">
            <summary class="form__summary">(*) Required Field</summary>
            <p>Fields with the star symbol are required.</p>
          </details>
        </div>
      </form>
      <div class="alert-message">
        <p class="response-message"></p>
      </div>
    </main>
  );
};

export default Contributing;
