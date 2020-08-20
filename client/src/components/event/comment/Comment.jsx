import React from "react";
import Avatar from "./../../user/avatar/Avatar";
import StyledComment from "./Comment.styles";

const Comment = () => {
  return (
    <StyledComment>
      <Avatar size="sm" />
      <div className="text">
        <div className="info">
          <p className="name">Luis Castro</p>
          <p className="date">Hace 12 horas</p>
        </div>
        <p className="comment">
          ullamco laboris nisi ut aliquip ex ea commodo consequat!!!
        </p>
      </div>
    </StyledComment>
  );
};

export default Comment;
