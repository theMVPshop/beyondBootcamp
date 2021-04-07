import React from "react";
import "./signIn.css";
import yoda from "./yoda.png";

export default function Dashboard() {
// set state for creds

// create/validate creds

//toggle from signin to signup
  var toggleBtns = document.querySelectorAll("sign-in-.js-formToggle");
  for (var i = 0; i < toggleBtns.length; i++) {
    toggleBtns[i].addEventListener("click", toggleForm);
  }
  var firstClick = true;
  function toggleForm() {
    if (!firstClick) {
      document
        .querySelector(".sign-in-js-imageAnimate")
        .classList.toggle("animate");
      document
        .querySelector(".sign-in-js-imageAnimate")
        .classList.toggle("animateOut");
      document
        .querySelector(".sign-in-js-panel__content")
        .classList.toggle("animate");
      document
        .querySelector(".sign-in-js-panel__content")
        .classList.toggle("animateOut");
    } else {
      firstClick = false;
      document
        .querySelector(".sign-in-js-imageAnimate")
        .classList.add("animate");
      document
        .querySelector(".sign-in-js-panel__content")
        .classList.add("animate");
    }
  }
  return (
    <div className="sign-in-page">
      <div className="sign-in-panel">
        <div className="sign-in-panel__visible">
          <div className="sign-in-panel__content">
            <h1 className="sign-in-panel__title"> Sign Up </h1>
            <form className="sign-in-form">
              <label className="sign-in-form__label" htmlFor="username">
                Username
              </label>
              <input
                className="sign-in-form__input"
                type="text"
                id="username"
                name="username"
              />
              <label className="sign-in-form__label" htmlFor="password">
                Password
              </label>
              <input
                className="sign-in-form__input "
                type="password"
                id="password"
                name="password"
              />
              <button
                className="sign-in-form__btn"
                type="button"
                value="Submit"
              >
                Submit
              </button>
              <button
                className="sign-in-form__toggle sign-in-js-formToggle"
                type="button"
                onClick={toggleForm}
              >
                Or, Sign In
              </button>
            </form>
          </div>
          <div
            className="sign-in-panel__content sign-in-panel__content--overlay sign-in-js-panel__content "
            onClick={toggleForm}
          >
            <h1 className="sign-in-panel__title"> Sign In </h1>
            <form className="sign-in-form">
              <label className="sign-in-form__label" htmlFor="usernameIn">
                Username
              </label>
              <input
                className="sign-in-form__input"
                type="text"
                id="usernameIn"
                name="usernameIn"
              />
              <label className="sign-in-form__label" htmlFor="passwordIn">
                Password
              </label>
              <input
                className="sign-in-form__input "
                type="password"
                id="passwordIn"
                name="passwordIn"
              />
              <button
                className="sign-in-form__btn"
                type="button"
                value="Submit"
              >
                Sign In
              </button>
              {/* <br /> */}
              <button
                className="sign-in-form__toggle sign-in-js-formToggle"
                type="button"
              >
                Or, Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="sign-in-panel__back sign-in-js-imageAnimate">
          <img
            className="sign-in-panel__img"
            src={yoda}
            alt="yoda, protector of the page"
            height="500"
          />
        </div>
      </div>
    </div>
  );
}
