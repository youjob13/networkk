import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./FriendItem.module.css";

const FriendItem = ({ name, id }) => (
  <NavLink to={`/friends/${id}`} className={classes.friendItem}>
    {name}
  </NavLink>
);

export default FriendItem;
