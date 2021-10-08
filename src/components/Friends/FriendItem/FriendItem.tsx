import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import classes from "./FriendItem.module.css";

export interface FriendItemProps {name: string, id: number}

const FriendItem = ({ name, id }: FriendItemProps): ReactElement => (
  <NavLink to={`/friends/${id}`} className={classes.friendItem}>
    {name}
  </NavLink>
);

export default FriendItem;
