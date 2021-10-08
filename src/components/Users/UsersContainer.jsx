import React from "react";
import { useEffect } from "react";
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

const UsersContainer = (props) => {
  useEffect(() => {
    props.getUsersThunkCreator(props.currentPage, props.pageSize);
  }, [props.currentPage, props.pageSize]);

  const changeCurrentPage = (pageNumber) => {
    props.getUsersThunkCreator(pageNumber, props.pageSize);
  };

  if (props.isFetching) {
      return <Preloader />;
  }

  return (
    <>
      <Users {...props} changeCurrentPage={changeCurrentPage} />
    </>
  );
};

const mapStateToProps = ({ usersPage }) => ({
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
