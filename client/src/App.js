import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchUserData } from "./redux/slices/user.slice";

import AppRoutes from "./AppRoutes";
import Header from "./components/shared/header/Header";
import Nav from "./components/shared/nav/Nav";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(params => {
    dispatch(fetchUserData(1));
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

export default App;
