import React, { useEffect } from "react";

import AppRoutes from "./AppRoutes";
import Header from "./components/shared/header/Header";

import "./App.css";
import { isTokenExpired } from "./utilities/jwtHelpers";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/slices/session";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (token && !isTokenExpired(token)) {
      dispatch(setUser(userId));
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
