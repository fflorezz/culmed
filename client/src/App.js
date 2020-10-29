import React from "react";

import AppRoutes from "./AppRoutes";
import Header from "./components/shared/header/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
