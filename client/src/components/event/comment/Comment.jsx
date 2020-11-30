import React from "react";
import Avatar from "./../../user/avatar/Avatar";
import StyledComment from "./Comment.styles";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/es";

moment.locale("es");

const Comment = ({ comment, isOwnComment }) => {
  const { createdAt, text, userId, User } = comment;
  const relativeTime = moment(createdAt).fromNow();

  function deleteComment() {
    console.log("delete");
  }
  return (
    <StyledComment>
      <Link to={`/${userId}`}>
        <Avatar size="sm" src={User.avatarImg} />
      </Link>
      <div className="text">
        <div className="info">
          <Link to={`/${userId}`}>
            <p className="name">{User.userName}</p>
          </Link>
          <p className="date">{relativeTime}</p>
        </div>
        <p className="comment">{text}</p>
      </div>
      {isOwnComment && (
        <div className="close-button" onClick={deleteComment}>
          x
        </div>
      )}
    </StyledComment>
  );
};

export default Comment;
