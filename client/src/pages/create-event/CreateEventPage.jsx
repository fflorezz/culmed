import React from "react";
import CreateEventForm from "../../components/event/create-event-form/CreateEventForm";
import StyledCreateEventPage from "./CreateEventPage-styles";

const CreateEventPage = () => {
  return (
    <StyledCreateEventPage>
      <CreateEventForm />;
    </StyledCreateEventPage>
  );
};

export default CreateEventPage;
