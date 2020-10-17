import React, { useEffect, useState } from "react";
import StyledAddEventButton from "./AddEventButton-styles";
import Icon from "./../../shared/icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "./../../../redux/slices/session";
import {
  addEventToCalendar,
  removeEventFromCalendar,
  clearResponse,
} from "../../../redux/slices/calendar";

const AddEventButton = ({ eventId, isCalendarEvent }) => {
  const dispatch = useDispatch();
  const { response, loading } = useSelector(state => state.calendar);
  const userId = useSelector(state => state.session.id);
  const [calendarEvent, setCalendarEvent] = useState(isCalendarEvent);

  //PENDING: ERROR HANDLING

  function handleClick() {
    if (loading) {
      return;
    }
    if (calendarEvent) {
      dispatch(removeEventFromCalendar({ eventId, userId }));
    } else {
      dispatch(addEventToCalendar({ eventId, userId }));
    }
  }

  useEffect(() => {
    if (response === 200) {
      setCalendarEvent(!calendarEvent);
      dispatch(fetchUserData(userId));
      dispatch(clearResponse());
    }
    // eslint-disable-next-line
  }, [response]);

  return (
    <StyledAddEventButton onClick={handleClick}>
      <Icon
        type={calendarEvent ? "check" : "add"}
        color={calendarEvent ? "gray" : "primary"}
      />
    </StyledAddEventButton>
  );
};

export default AddEventButton;
