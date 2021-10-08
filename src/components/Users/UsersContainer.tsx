import React, { ReactElement, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  followThunkCreator,
  getUsersThunkCreator,
  setCurrentPage,
  toggleIsFollowingProgress,
  unfollowThunkCreator,
} from "../../redux/usersReducer";

import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";
import { UsersSelectorState } from "../../shared/models/store";

const UsersContainer = ({ currentPage,pageSize,isFetching, pageNumber }: any): ReactElement => {
  const p ={ currentPage,pageSize,isFetching }; // TODO: remove
  useEffect(() => {
    getUsersThunkCreator(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const changeCurrentPage = (gettingPageNumber: number) => {
    getUsersThunkCreator(pageNumber, pageSize);
  };

  if (isFetching) {
    return <Preloader />;
  }

  return (
    <>
      <Users {...p} changeCurrentPage={changeCurrentPage} />
    </>
  );
};

const mapStateToProps = ({ usersPage }: UsersSelectorState) => ({
  usersData: usersPage.usersData,
  pageSize: usersPage.pageSize,
  totalUsersCount: usersPage.totalUsersCount,
  currentPage: usersPage.currentPage,
  isFetching: usersPage.isFetching,
  followingInProgress: usersPage.followingInProgress,
});

export default compose(
  connect(mapStateToProps, {
    followThunkCreator,
    unfollowThunkCreator,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsersThunkCreator,
  })
)(UsersContainer);
