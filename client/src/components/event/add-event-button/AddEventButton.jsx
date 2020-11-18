import React, { useEffect, useState } from "react";
import StyledAddEventButton from "./AddEventButton-styles";
import Icon from "./../../shared/icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  addEventToCalendar,
  removeEventFromCalendar,
  clearStatus,
} from "../../../redux/slices/session";

const AddEventButton = ({ eventId, isCalendarEvent }) => {
  const dispatch = useDispatch();
  const { status, loading, isLogin } = useSelector(state => state.session);
  const [calendarEvent, setCalendarEvent] = useState(isCalendarEvent);
  const history = useHistory();

  //PENDING: ERROR HANDLING (Modal)

  function handleClick() {
    if (loading) {
      return;
    }
    if (calendarEvent) {
      dispatch(removeEventFromCalendar(eventId));
    } else {
      dispatch(addEventToCalendar(eventId));
    }
  }

  function redirect() {
    history.push("/login");
  }

  useEffect(() => {
    if (status === "OK") {
      setCalendarEvent(!calendarEvent);
      dispatch(clearStatus());
    }
    // eslint-disable-next-line
  }, [status]);

  return (
    <StyledAddEventButton onClick={isLogin ? handleClick : redirect}>
      <Icon
        type={calendarEvent ? "check" : "add"}
        color={calendarEvent ? "gray" : "primary"}
      />
    </StyledAddEventButton>
  );
};

export default AddEventButton;
