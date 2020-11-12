import { usersAPI } from "../api/api";
import { updateObject } from "../utils/reducerRefact";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
  usersData: [],
  pageSize: 10,
  totalUsersCount: null,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        usersData: updateObject(state.usersData, action.userId, "id", {
          followed: true,
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        usersData: updateObject(state.usersData, action.userId, "id", {
          followed: false,
        }),
      };
    }
    case SET_USERS: {
      return { ...state, usersData: action.usersData };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    default: {
      return state;
    }
  }
};
//action creator
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (usersData) => ({ type: SET_USERS, usersData });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleIsFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});
//thunk creator
export const getUsersThunkCreator = (currentPage, pageSize) => async (
  dispatch
) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(currentPage));

  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
  dispatch(toggleIsFetching(false));
};
//исключение дублирования кода
const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  const resultCode = await apiMethod(userId);
  if (resultCode === 0) dispatch(actionCreator(userId));
  dispatch(toggleIsFollowingProgress(false, userId));
};

export const followThunkCreator = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.followUser.bind(userId),
      followSuccess
    );
  };
};

export const unfollowThunkCreator = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollowUser.bind(userId),
      unfollowSuccess
    );
  };
};

export default usersReducer;
