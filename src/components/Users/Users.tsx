import React, { ReactElement } from "react";
import classes from "./Users.module.css";
import User from "./User";
import Paginator from "../common/Paginator/Paginator";

const Users = ({
  totalUsersCount,
  currentPage,
  pageSize,
  changeCurrentPage,
  usersData,
  followThunkCreator,
  unfollowThunkCreator,
  followingInProgress,
}: any): ReactElement => (
  <div className={classes.users}>
    <Paginator
      pageSize={pageSize}
      changeCurrentPage={changeCurrentPage}
      totalItemsCount={totalUsersCount}
      currentPage={currentPage}
    />
    <div>
      {usersData.map((item: any) => (
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
)

export default Users;
