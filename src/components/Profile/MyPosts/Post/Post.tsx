import React, { ReactElement } from "react";
import { UserPhoto } from "../../../common/UserPhoto/UserPhoto";

import classes from "./Post.module.css";

const Post = ({ photo, message, likeCount }: any): ReactElement => (
  <div className={classes.item}>
    <UserPhoto photo={photo} />
    <div className={classes.message}>
      <p className={classes.messageText}>{message}</p>
      <p>{likeCount} like</p>
    </div>
  </div>
);

export default Post;
