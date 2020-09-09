import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchUserData } from "./redux/slices/user.slice";

import AppRoutes from "./AppRoutes";
import Header from "./components/shared/header/Header";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData(1));
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
