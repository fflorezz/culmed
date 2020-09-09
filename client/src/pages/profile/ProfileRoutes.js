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

let ProfileRoutes = () => {
  let location = useLocation();
  let { path } = useRouteMatch();

  let background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        {console.log(path)}
        <PrivateRoute exact path={`${path}/events`} component={EventsPage} />
        <PrivateRoute
          exact
          path={`${path}/calendar`}
          component={CalendarPage}
        />
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

export default ProfileRoutes;
