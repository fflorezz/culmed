import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchUserData } from "./redux/slices/session";

import AppRoutes from "./AppRoutes";
import Header from "./components/shared/header/Header";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData(3));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
