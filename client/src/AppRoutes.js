import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import LandingPage from "./components/landing/landing-page/LandingPage";
import LoginPage from "./components/auth/login-page/LoginPage";
import RegistrationPage from "./components/auth/registration-page/RegistrationPage";
import ExplorePage from "./pages/explore-page/ExplorePage";
import Event from "./components/event/event/Event";
import CreateEventPage from "./pages/create-event/CreateEventPage";
import ProfilePage from "./pages/profile/ProfilePage";

let AppRoutes = () => {
  let location = useLocation();

  let background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route exact path="/">
          <Redirect to={"/events"} />
        </Route>
        <Route exact path="/landing" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={RegistrationPage} />
        <Route exact path="/events" component={ExplorePage} />
        <PrivateRoute exact path="/events/new" component={CreateEventPage} />
        <PrivateRoute path="/:userId" component={ProfilePage} />
      </Switch>
      <Switch>
        {background && (
          <Route exact path="/events/:eventId" component={Event} />
        )}
      </Switch>
    </>
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
