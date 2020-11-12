import React from "react";
import { NavLink } from "react-router-dom";

import userPhoto from "../../assests/img/user.jpg";
import classes from "./Users.module.css";

const Users = ({
  item,
  followThunkCreator,
  unfollowThunkCreator,
  followingInProgress,
}) => (
  <div className={classes.userBlock} key={item.id}>
    <div className={classes.userItem}>
      <NavLink to={`/profile/${item.id}`}>
        <img
          className={classes.userPhoto}
          src={item.photos.small !== null ? item.photos.small : userPhoto}
          alt=""
        />
      </NavLink>
      {item.followed ? (
        <button
          disabled={followingInProgress.some((id) => id === item.id)}
          className={`${classes.followed} ${classes.unfollow}`}
          onClick={() => {
            unfollowThunkCreator(item.id);
          }}
        >
          Unfollow
        </button>
      ) : (
        <button
          disabled={followingInProgress.some((id) => id === item.id)}
          className={`${classes.followed} ${classes.follow}`}
          onClick={() => {
            followThunkCreator(item.id);
          }}
        >
          Follow
        </button>
      )}
    </div>
    <div className={classes.userInfo}>
      <span>
        <p>
          <strong>Name:</strong> {item.name}
        </p>
        <p>
          <strong>Status:</strong> {item.status}
        </p>
      </span>
      <span>
        <p>
          <strong>Country:</strong> {"item.country"}
        </p>
        <p>
          <strong>City:</strong> {"item.city"}
        </p>
      </span>
    </div>
  </div>
);

export default Users;
