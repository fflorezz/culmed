import React from "react";
import "./App.css";

import AppStyles from "./App-styles";
import CreateEventPage from "./components/event/create-event-page/CreateEventPage";

function App() {
  return (
    <div className="App">
      <AppStyles />
      <CreateEventPage />
    </div>
  );
}

export default App;
