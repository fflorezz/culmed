import React, { useEffect, useState } from "react";
import StyledAddEventButton from "./AddEventButton-styles";
import Icon from "./../../shared/icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import {
  addEventToCalendar,
  removeEventFromCalendar,
  clearStatus,
} from "../../../redux/slices/session";

const AddEventButton = ({ eventId, isCalendarEvent }) => {
  const dispatch = useDispatch();
  const { status, loading } = useSelector(state => state.session);
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
    if (status === 200) {
      setCalendarEvent(!calendarEvent);
      dispatch(clearStatus());
    }
    // eslint-disable-next-line
  }, [status]);

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
