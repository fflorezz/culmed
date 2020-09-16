import React, { useState, useEffect } from "react";
import StyledProfileRow from "./ProfileRow-styles";
import Avatar from "../avatar/Avatar";
import CardImage from "./../../event/event-card/CardImage";
import { getUserData } from "../../../API/user";
import { getEventsByAuthor } from "../../../API/events";
import { Link } from "react-router-dom";

const ProfileRow = ({ id, isFollowing, isOwnProfile }) => {
  const [user, setUser] = useState({});
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function asyncData() {
      const user = await getUserData(id);
      setUser(user);
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
            src={user.avatarImg}
            name={user.userName}
            followers={user.followers}
            size="lg"
            column
            text
            followingBtn={!isOwnProfile}
            isFollowing={isFollowing}
          />
        </Link>
      </div>
      <div className="row-events">
        {events.map(({ img, date, title, id }, idx) =>
          idx > 3 ? null : (
            <CardImage key={id} img={img} title={title} id={id} date={date} />
          )
        )}
      </div>
    </StyledProfileRow>
  );
};

export default ProfileRow;
