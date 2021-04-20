import React from "react";
// import { Route, Switch, Redirect } from "react-router"; --- uncomment once protected routes is ready to go
import { Route, Switch } from "react-router";
// import cookie from "cookie"; --- uncomment once protected routes is ready to go

//Components
import About from "./components/About/About";
import Dashboard from "./components/Dashboard/Dashboard";
import SignIn from "./components/SignIn/SignIn";
import YouTubeVideos from "./components/YouTube/YouTubeVideos";
import GradVideos from "./components/YouTube/GradVideos";
import LandingPage from "./components/LandingPage/LandingPage";

// --- uncomment both below once protected routes is ready to go
// const checkAuth = () => {
//   const cookies = cookie.parse(document.cookie);
//   return cookies["loggedIn"] ? true : false;
// };

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         checkAuth() ? <Component {...props} /> : <Redirect to="/signn" />
//       }
//     />
//   );
// };

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/about" component={About} />
      <Route path="/videoTutorials" component={YouTubeVideos} />
      <Route path="/gradTv" component={GradVideos} />
      {/* <ProtectedRoute path="/dashboard" component={Dashboard} /> */}
      <Route path="/dashboard" component={Dashboard} />
      {/* <ProtectedRoute path="/signin" component={SignIn} /> */}
      <Route path="/signin" component={SignIn} />
    </Switch>
  );
};

export default Router;
