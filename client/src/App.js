import React from "react";
import "./App.css";
import Button from "./components/shared/button/Button";
import Icon from "./components/shared/icon/Icon";

function App() {
  return (
    <div className="App">
      <Button size="sm" text="Primary" color="primary" />
      <Button size="md" text="Primary" color="secondary" />
      <Button size="lg" text="Primary" color="complementary" />

      <Button size="sm" outline text="Primary" color="primary" />
      <Button size="md" outline text="Primary" color="secondary" />
      <Button size="lg" outline text="Primary" color="complementary" />

      <Icon type="like" />
      <Icon type="add" size="sm" color="primary" />
      <Icon type="views" size="sm" color="complementary" />
    </div>
  );
}

export default App;
