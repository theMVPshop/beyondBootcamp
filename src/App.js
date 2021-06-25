import React from "react";
import { HashRouter } from "react-router-dom";
import Router from "./Router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
}

export default App;
