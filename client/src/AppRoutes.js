import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LandingPage from "./components/landing/landing-page/LandingPage";
import LoginPage from "./components/auth/login-page/LoginPage";
import RegistrationPage from "./components/auth/registration-page/RegistrationPage";
import ExplorePage from "./pages/explore-page/ExplorePage";
import FollowingPage from "./pages/following-page/FollowingPage";
import MyCalendarPage from "./pages/my-calendar/MyCalendarPage";
import MyEventsPage from "./pages/my-events/MyEventsPage";

let AppRoutes = () => {
  let isLogin = true;
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={isLogin ? "/explor" : "/landing"} />
      </Route>
      <Route exact path="/landing" component={LandingPage} />
      <Route exact path="/explore" component={ExplorePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={RegistrationPage} />
      <PrivateRoute exact path="/following" component={FollowingPage} />
      <PrivateRoute exact path="/my-calendar" component={MyCalendarPage} />
      <Route exact path="/profile">
        <Redirect to="/profile/my-events" />
      </Route>
      <PrivateRoute exact path="/profile/my-events" component={MyEventsPage} />
    </Switch>
  );
};

let PrivateRoute = ({ component: Component, ...rest }) => {
  let isLogin = true;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};

export default AppRoutes;
