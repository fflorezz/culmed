import React from "react";
import "./App.css";

import AppStyles from "./App-styles";
import LoginPage from "./components/auth/login-page/LoginPage";

function App() {
  return (
    <div className="App">
      <AppStyles />
      <LoginPage />
    </div>
  );
}

export default App;
