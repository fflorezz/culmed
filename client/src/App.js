import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/shared/header/Header";
import LandingPage from "./components/landing/landing-page/LandingPage";
import LoginPage from "./components/auth/login-page/LoginPage";
import RegistrationPage from "./components/auth/registration-page/RegistrationPage";
import Nav from "./components/shared/nav/Nav";
import ExplorePage from "./pages/explore-page/ExplorePage";
import FollowingPage from "./pages/following-page/FollowingPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Switch>
        {/* //  is user login? Landing : Explore */}
        <Route exact path="/" component={ExplorePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={RegistrationPage} />
        <Route exact path="/explore" component={ExplorePage} />
        <Route exact path="/following" component={FollowingPage} />
      </Switch>
    </div>
  );
}

export default App;
