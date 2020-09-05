import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getUserData } from "./redux/user/user.slice";

import AppRoutes from "./AppRoutes";
import Header from "./components/shared/header/Header";
import Nav from "./components/shared/nav/Nav";

import "./App.css";

function App({ userId, getUserData }) {
  useEffect(params => {
    getUserData({ userId: 1, events: [1, 2, 3] });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      {console.log({ userId })}
      <Header />
      <Nav />
      <AppRoutes />
    </div>
  );
}

const mapStateToProps = state => ({ userId: state.user.userId });
const mapDispatchToProps = { getUserData };

export default connect(mapStateToProps, mapDispatchToProps)(App);
