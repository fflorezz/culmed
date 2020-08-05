import React from "react";
import "./App.css";
import Button from "./components/shared/button/Button";
import Icon from "./components/shared/icon/Icon";
import Avatar from "./components/shared/avatar/Avatar";
import ViewsAndParticipants from "./components/shared/views-and-participants/ViewsAndParticipants";
import CardImage from "./components/event/event-card/CardImage";

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

      <Avatar size="lg" column />

      <ViewsAndParticipants />
      <CardImage />
    </div>
  );
}

export default App;
