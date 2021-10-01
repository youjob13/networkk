import { usersAPI } from "../api/api";
import { updateObject } from "../utils/reducerRefact";
import {
  FollowSuccessActionType,
  SetCurrentPageActionType,
  SetTotalUsersCountActionType,
  SetUsersActionType,
  ToggleIsFetchingActionType,
  ToggleIsFollowingProgressActionType,
  UnFollowSuccessActionType,
  UsersState,
  UserType
} from "../shared/models/store";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS";

export enum UsersActionTypes {
  FOLLOW = 'users/FOLLOW',
  UNFOLLOW = 'users/UNFOLLOW',
  SET_USERS = 'users/SET_USERS',
  SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE',
  SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT',
  TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING',
  TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS',
}

const initialState: UsersState = {
  usersData: [],
  pageSize: 10,
  totalUsersCount: null,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action: any): UsersState => {
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

export const followSuccess = (userId: number): FollowSuccessActionType =>
  ({ type: UsersActionTypes.FOLLOW, payload: {userId} });
export const unfollowSuccess = (userId: number): UnFollowSuccessActionType =>
  ({ type: UsersActionTypes.UNFOLLOW, payload: {userId} });
export const setUsers = (usersData: UserType): SetUsersActionType =>
  ({ type: UsersActionTypes.SET_USERS, payload: {usersData} });
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
  type: UsersActionTypes.SET_CURRENT_PAGE,
  payload: {currentPage},
});
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType =>
  ({
  type: UsersActionTypes.SET_TOTAL_USERS_COUNT,
  payload: {count:totalUsersCount}
});
export const toggleIsFetching = (isFetching: boolean):ToggleIsFetchingActionType => ({
  type: UsersActionTypes.TOGGLE_IS_FETCHING,
  payload: {isFetching},
});
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number): ToggleIsFollowingProgressActionType => ({
  type: UsersActionTypes.TOGGLE_IS_FOLLOWING_PROGRESS,
  payload: {isFetching, userId}
});
//thunk creator
export const getUsersThunkCreator = (currentPage: number, pageSize: number) => async (
  dispatch: any
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
  dispatch: any,
  userId: number,
  apiMethod: any,
  actionCreator: any
) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  const resultCode = await apiMethod(userId);
  if (resultCode === 0) dispatch(actionCreator(userId));
  dispatch(toggleIsFollowingProgress(false, userId));
};

export const followThunkCreator = (userId: number) => {
  return async (dispatch: any) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.followUser.bind(userId),
      followSuccess
    );
  };
};

export const unfollowThunkCreator = (userId: number) => {
  return async (dispatch: any) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollowUser.bind(userId),
      unfollowSuccess
    );
  };
};

export default usersReducer;
