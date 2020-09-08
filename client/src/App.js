import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchUserData } from "./redux/user/user.slice";

import AppRoutes from "./AppRoutes";
import Header from "./components/shared/header/Header";
import Nav from "./components/shared/nav/Nav";

import "./App.css";

function App({ userId, fetchUserData }) {
  useEffect(params => {
    fetchUserData(1);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Header />
      <Nav />
      <AppRoutes />
    </div>
  );
}

const mapStateToProps = state => ({ userId: state.user.userId });
const mapDispatchToProps = { fetchUserData };

export default connect(mapStateToProps, mapDispatchToProps)(App);
