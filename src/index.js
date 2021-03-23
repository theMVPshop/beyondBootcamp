import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ArticleCard from "./components/LandingPage/ArticleCard";
import NavCard from "./components/LandingPage/NavCard";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ArticleCard />
    <NavCard />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
