import React from "react";
import Avatar from "./../../user/avatar/Avatar";
import StyledComment from "./Comment.styles";
import { Link } from "react-router-dom";

const Comment = ({ comment }) => {
  const { createdAt, text, userId, User } = comment;
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
          <p className="date">{createdAt}</p>
        </div>
        <p className="comment">{text}</p>
      </div>
    </StyledComment>
  );
};

export default Comment;
