import React from "react";
import "./App.css";

import AppStyles from "./App-styles";
import Comment from "./components/event/comment/Comment";
import CommentField from "./components/event/comment-field/CommentField";

function App() {
  return (
    <div className="App">
      <AppStyles />
      <Comment />
      <CommentField />
    </div>
  );
}

export default App;
