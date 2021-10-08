// import { createSelector } from "reselect";
//
// const getUsersSelector = (state) => {
//   return state.usersPage.usersData;
// };
// export const getUsers = createSelector(getUsersSelector, (usersData) => {
//   return usersData.filter((u) => true);
// });
// export const getPageSize = (state) => {
//   return state.usersPage.pageSize;
// };
import {
  DialogsSelectorState,
  DialogsState,
  UsersSelectorState,
} from '../shared/models/store';

export const getTotalUsersCount = (state: UsersSelectorState): number | null =>
  state.usersPage.totalUsersCount;
export const getCurrentPage = (state: UsersSelectorState): number =>
  state.usersPage.currentPage;
export const getIsFetching = (state: UsersSelectorState): boolean =>
  state.usersPage.isFetching;
export const getFollowingInProgress = (state: UsersSelectorState): number[] =>
  state.usersPage.followingInProgress;
export const getDialogsPage = (state: DialogsSelectorState): DialogsState =>
  state.dialogsPage;
