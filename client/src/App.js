import React from "react";

import AppRoutes from "./AppRoutes";
import Header from "./components/shared/header/Header";
import Nav from "./components/shared/nav/Nav";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <AppRoutes />
    </div>
  );
}

export default App;
