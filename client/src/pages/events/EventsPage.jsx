import React, { useEffect } from "react";
import StyledEventsPage from "./EventPage-styles";
import CardImage from "../../components/event/event-card/CardImage";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchEventsByAuthor } from "../../redux/slices/events";
import EventsList from "./../../components/event/event-list/EventsList";
import PageContainer from "./../../components/shared/page-container/PageContainer";

const EventsPage = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const events = useSelector(state => state.events.userEvents);

  useEffect(function () {
    dispatch(fetchEventsByAuthor(userId));
  }, []);
  return (
    <StyledEventsPage>
      <PageContainer>
        <EventsList events={events} />
      </PageContainer>
      {console.log(events)}
    </StyledEventsPage>
  );
};

export default EventsPage;
