import React, { ReactElement } from "react";
import FriendItem from "./FriendItem/FriendItem";
import classes from "./Friends.module.css";

const Friends = ({ friends }: any): ReactElement => (<div className={classes.friends}>
  {friends.map((item: any) => (
    <FriendItem key={item.id} id={item.id} name={item.name} />
  ))}
</div>  );

export default Friends;
