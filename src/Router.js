import React from "react";
import { Route, Switch, Redirect } from "react-router";
import cookie from "cookie";

//Components
import About from "./components/About/About";
import Dashboard from "./components/Dashboard/Dashboard";
//Once Landing page is complete, we can uncomment the next line
// import LandingPage from "./components/LandingPage/LandingPage";
import SignIn from "./components/SignIn/SignIn";
import YouTube from "./components/YouTube/YouTube";
//Once Landing page is complete, we can delete article card from being imported
import LandingPage from './components/LandingPage/LandingPage';

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/signn" />
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      {/* Once Landing page is complete, we need to replace ArticleCard with LandingPage */}
      <Route exact path="/" component={LandingPage} />
      <Route path="/about" component={About} />
      <Route path="/youtube" component={YouTube} />
      {/* <ProtectedRoute path="/dashboard" component={Dashboard} /> */}
      <Route path="/dashboard" component={Dashboard} />
      {/* <ProtectedRoute path="/signin" component={SignIn} /> */}
      <Route path="/signin" component={SignIn} />
    </Switch>
  );
};

export default Router;