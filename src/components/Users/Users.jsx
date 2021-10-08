import React from "react";

import User from "./User.tsx";
import Paginator from "../common/Paginator/Paginator";

import classes from "./Users.module.css";

const Users = ({
  totalUsersCount,
  currentPage,
  pageSize,
  changeCurrentPage,
  usersData,
  followThunkCreator,
  unfollowThunkCreator,
  followingInProgress,
}) => {
    console.log(usersData)
  return (
    <div className={classes.users}>
      <Paginator
        pageSize={pageSize}
        changeCurrentPage={changeCurrentPage}
        totalItemsCount={totalUsersCount}
        currentPage={currentPage}
      />
      <div>
        {usersData.map((item) => (
          <User
            key={item.id}
            followingInProgress={followingInProgress}
            unfollowThunkCreator={unfollowThunkCreator}
            followThunkCreator={followThunkCreator}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};
export default Users;
