import React from "react";
import "../css/Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="PortiCode"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
      </div>
      <img
        className="post__image"
        src="https://www.freecodecamp.org/news/content/images/size/w600/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
        alt=""
      />
      <h4 className="post_text">
        <strong>porti </strong>
        wow day three of live sessions
      </h4>
    </div>
  );
}
export default Post;
