import React, { useState, useEffect } from "react";
import StyledProfileRow from "./ProfileRow-styles";
import Avatar from "../avatar/Avatar";
import CardImage from "./../../event/event-card/CardImage";
import { getEventsByAuthor } from "../../../API/events";
import { Link } from "react-router-dom";
import FollowingButton from "../../shared/button/FollowingButton";

const ProfileRow = ({ id, isFollowing, isOwnProfile, userName, avatarImg }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function asyncData() {
      const events = await getEventsByAuthor(id);
      setEvents(events);
    }
    asyncData();
  }, [id]);

  return (
    <StyledProfileRow>
      <div className="row-avatar">
        <Link to={`/${id}`}>
          <Avatar
            src={avatarImg}
            name={userName}
            followers={20}
            size="lg"
            column
            text
          />
        </Link>
        {isOwnProfile ? null : (
          <FollowingButton isFollowing={isFollowing} followingId={id} />
        )}
      </div>
      <ul className="row-events">
        {events.map(({ img, date, title, id }, idx) =>
          idx > 3 ? null : (
            <li key={id}>
              <CardImage img={img} title={title} id={id} date={date} />
            </li>
          )
        )}
      </ul>
    </StyledProfileRow>
  );
};

export default ProfileRow;
