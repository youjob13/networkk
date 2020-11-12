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
// import {
//   getUsers,
//   getPageSize,
//   getTotalUsersCount,
//   getCurrentPage,
//   getIsFetching,
//   getFollowingInProgress,
// } from "../../redux/usersSelectors";

import Preloader from "../common/preloader/Preloader";
import Users from "./Users";

const UsersContainer = (props) => {
  useEffect(() => {
    props.getUsersThunkCreator(props.currentPage, props.pageSize);
  }, [props.currentPage, props.pageSize]);

  const changeCurrentPage = (pageNumber) => {
    props.getUsersThunkCreator(pageNumber, props.pageSize);
  };
  if (props.isFetching) return <Preloader />;
  return (
    <>
      <Users {...props} changeCurrentPage={changeCurrentPage} />
    </>
  );
};

// class UsersContainer extends React.Component {
//   componentDidMount() {
//     this.props.getUsersThunkCreator(
//       this.props.currentPage,
//       this.props.pageSize
//     );
//   }

//   changeCurrentPage = (pageNumber) => {
//     this.props.getUsersThunkCreator(pageNumber);
//   };

//   render() {
//     console.log("render");
//     if (this.props.isFetching) {
//       return <Preloader />;
//     }
//     return (
//       <>
//         <Users {...this.props} changeCurrentPage={this.changeCurrentPage} />
//       </>
//     );
//   }
// }

const mapStateToProps = ({ usersPage }) => ({
  usersData: usersPage.usersData,
  pageSize: usersPage.pageSize,
  totalUsersCount: usersPage.totalUsersCount,
  currentPage: usersPage.currentPage,
  isFetching: usersPage.isFetching,
  followingInProgress: usersPage.followingInProgress,
});

// const mapStateToProps = (state) => ({
//   usersData: getUsers(state),
//   pageSize: getPageSize(state),
//   totalUsersCount: getTotalUsersCount(state),
//   currentPage: getCurrentPage(state),
//   isFetching: getIsFetching(state),
//   followingInProgress: getFollowingInProgress(state),
// });

export default compose(
  connect(mapStateToProps, {
    followThunkCreator,
    unfollowThunkCreator,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsersThunkCreator,
  })
)(UsersContainer);

// export const UsersContainer = connect(mapStateToProps, {
//   followThunkCreator,
//   unfollowThunkCreator,
//   setCurrentPage,
//   toggleIsFollowingProgress,
//   getUsersThunkCreator, //callback
// })(UsersContainer);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//   };
// };
