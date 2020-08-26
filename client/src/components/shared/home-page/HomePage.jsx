import React from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./../nav/Nav";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/explore" component="explore" />
      </Switch>
    </div>
  );
};

export default HomePage;
