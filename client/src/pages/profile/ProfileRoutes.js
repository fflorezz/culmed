import React from "react";
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useRouteMatch,
} from "react-router-dom";

import FollowingPage from "../following-page/FollowingPage";
import CalendarPage from "../calendar/CalendarPage";
import EventsPage from "../events/EventsPage";
import EditProfilePage from "../edit-profile/EditProfilePage";
import { isTokenExpired } from "./../../utilities/jwtHelpers";

let ProfileRoutes = () => {
  let location = useLocation();
  let { path, url } = useRouteMatch();

  let background = location.state && location.state.background;

  return (
    <Switch location={background || location}>
      <Route exact path={`${path}`}>
        <Redirect to={`${url}/events`} />
      </Route>
      <PrivateRoute exact path={`${path}/events`} component={EventsPage} />
      <PrivateRoute exact path={`${path}/calendar`} component={CalendarPage} />
      <PrivateRoute
        exact
        path={`${path}/following`}
        component={FollowingPage}
      />
      <PrivateRoute
        exact
        path={`${path}/account/edit`}
        component={EditProfilePage}
      />
    </Switch>
  );
};

let PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  const isTokenValid = token && !isTokenExpired(token);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isTokenValid ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};

export default ProfileRoutes;
