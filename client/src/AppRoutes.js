import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LandingPage from "./components/landing/landing-page/LandingPage";
import LoginPage from "./components/auth/login-page/LoginPage";
import RegistrationPage from "./components/auth/registration-page/RegistrationPage";
import ExplorePage from "./pages/explore-page/ExplorePage";
import FollowingPage from "./pages/following-page/FollowingPage";
import MyCalendarPage from "./pages/my-calendar/MyCalendarPage";

const AppRoutes = () => {
  let isLogin = true;
  let routes;

  if (isLogin) {
    routes = (
      <Switch>
        <Route exact path="/">
          <Redirect to="/explore" />
        </Route>
        <Route exact path="/explore" component={ExplorePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={RegistrationPage} />
        <Route exact path="/following" component={FollowingPage} />
        <Route exact path="/my-calendar" component={MyCalendarPage} />
        <Route exact path="/profile">
          <Redirect to="/profile/my-events" />
        </Route>
        <Route exact path="/profile/my-events" component={ExplorePage} />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/">
          <Redirect to="/landing" />
        </Route>
        <Route exact path="/landing" component={LandingPage} />
        <Route exact path="/explore" component={ExplorePage} />
        <Route path="/login" component={LoginPage} />
        <Redirect to="/login" />
      </Switch>
    );
  }

  return routes;
};

export default AppRoutes;
