import React from "react";

import FriendItem from "./FriendItem/FriendItem";
import classes from "./Friends.module.css";

const Friends = ({ friends }) => {
  return (
    <div className={classes.friends}>
      {friends.map((item) => (
        <FriendItem key={item.id} id={item.id} name={item.name} />
      ))}
    </div>
  );
};

export default Friends;
