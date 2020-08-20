import React from "react";
import "./App.css";

import AppStyles from "./App-styles";
import Comment from "./components/event/comment/Comment";
import CommentField from "./components/event/comment-field/CommentField";
import Tags from "./components/event/tags/Tags";
import Event from "./components/event/event/Event";

function App() {
  return (
    <div className="App">
      <AppStyles />
      <Event />
    </div>
  );
}

export default App;
