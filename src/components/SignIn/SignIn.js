import React, { useState } from "react";
import "./signIn.css";
import yoda from "./yoda.png";
import { Redirect } from "react-router-dom";
// import cookie from "cookie";
import axios from "axios";
import e from 'cors';

export default function Dashboard() {
  // const cookies = cookie.parse(document.cookie);

  // set state for creds
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  // set state to create an id for new users
  const [userId, setUserId] = useState(null);

  // state for error handling
  const [errMsg, setErrMsg] = useState("");

  // state for redirect
  const [redirectToDash, setRedirectToDash] = useState(false);
  const [redirectToSignIn, setRedirectToSignIn] = useState(false);

  // Sign in function and validate creds
  const onSignIn = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          `http://localhost:4001/signin`,
          { ...credentials },
          { "Content-Type": "application/json" }
        )
        .then((res) => {
          if (!res.ok) {
            if (res.status === 404) {
              setErrMsg(
                "Who sent you? Account does not exist with this email or password."
              );
            }
          } else {
            document.cookie = `token=${res.token}`;
            document.cookie = "loggedIn=true";
            setRedirectToDash(true);
          }
        });
    } catch (error) {
      setErrMsg(`There is an error! ${error}`);
    }
  };

  // Sign up fucntion and create/save creds
  const onRegister = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          `http://localhost:4001/createuser`,
          { ...credentials },
          { "Content-Type": "application/json" }
        )
        .then((res) => {
          setUserId(res.userId);
          setRedirectToSignIn(true);
        });
    } catch (error) {
      setErrMsg(`There is an error! ${error}`);
    }
  };

  // Redirects for each function
  if (redirectToSignIn) {
    return <Redirect to="/dashboard" />;
  }

  if (redirectToDash) {
    return <Redirect to="/dashboard" />;
  }

  // handle changes to the inputs and saves creds to state
  const handleTextChange = (e) => {
    const creds = { ...credentials };
    creds[e.target.id] = e.target.value;
    setCredentials(creds);
  };

  // switch between register and log in button functions
  const submitButtonSwitch = (e) => {
    console.log("e", e.target.name)
    if (e.target.name === "sign-in") {
      onSignIn();
    } else {
      onRegister();
    }
  };

  //toggle buttons for signin and signup
  var toggleBtns = document.querySelectorAll("sign-in-.js-formToggle");
  for (var i = 0; i < toggleBtns.length; i++) {
    toggleBtns[i].addEventListener("click", toggleFormAnimation);
  }

  //animation for signin and signup button clicks
  var firstClick = true;
  function toggleFormAnimation() {
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
            <form className="sign-in-form" onSubmit={this.submitButtonSwitch}>
              <label className="sign-in-form__label" htmlFor="username">
                Username
              </label>
              <input
                className="sign-in-form__input"
                type="text"
                id="username"
                name="username"
                placeholder="Email"
                onChange={handleTextChange}
              />
              <label className="sign-in-form__label" htmlFor="password">
                Password
              </label>
              <input
                className="sign-in-form__input "
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={handleTextChange}
              />
              <button
                className="sign-in-form__btn"
                type="submit"
                name="register"
                value="register"
              >
                Submit
              </button>
              <button
                className="sign-in-form__toggle sign-in-js-formToggle"
                type="button"
                onClick={toggleFormAnimation}
              >
                Or, Sign In
              </button>
            </form>
          </div>
          <div className="sign-in-panel__content sign-in-panel__content--overlay sign-in-js-panel__content ">
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
                placeholder="Email"
                onChange={handleTextChange}
              />
              <label className="sign-in-form__label" htmlFor="passwordIn">
                Password
              </label>
              <input
                className="sign-in-form__input "
                type="password"
                id="passwordIn"
                name="passwordIn"
                placeholder="Password"
                onChange={handleTextChange}
              />
              <button
                className="sign-in-form__btn"
                type="submit"
                value="sign-in"
                name="sign-in"
              >
                Sign In
              </button>
              {/* <br /> */}
              <button
                className="sign-in-form__toggle sign-in-js-formToggle"
                type="button"
                onClick={toggleFormAnimation}
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
