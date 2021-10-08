import { UsersActionTypes } from '../../redux/usersReducer';

export interface AppState {
  initialized: boolean;
}

export enum AppActionTypes {
  INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS',
}

export interface InitializedSuccessActionType {
  type: AppActionTypes.INITIALIZED_SUCCESS;
}

export interface AuthState {
  userId: number | null;
  email: string | null;
  login: string | null;
  photo: string | null;
  isFetching: boolean;
  isAuth: boolean;
  captchaUrl: string | null;
}

export enum AuthActionTypes {
  SET_USER_DATA = 'auth/SET_USER_DATA',
  SET_USER_PHOTO = 'auth/SET_USER_PHOTO',
  GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS',
}

interface SetAuthUserDataPayloadType {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
}

export interface SetAuthUserDataActionType {
  type: AuthActionTypes.SET_USER_DATA;
  payload: SetAuthUserDataPayloadType;
}

export interface SetUserPhotoActionType {
  type: AuthActionTypes.SET_USER_PHOTO;
  payload: { photo: string };
}

export interface GetCaptchaUrlSuccess {
  type: AuthActionTypes.GET_CAPTCHA_URL_SUCCESS;
  payload: { captchaUrl: string };
}

type MessageType = { id: number; message: string };
type DialogType = { id: number; name: string };

export type DialogsSelectorState = { dialogsPage: DialogsState };

export interface DialogsState {
  dialogsData: DialogType[];
  messagesData: MessageType[];
}

export enum DialogsActionTypes {
  SEND_MESSAGE = 'dialogs/SEND-MESSAGE',
}

export interface SendMessageActionType {
  type: DialogsActionTypes.SEND_MESSAGE;
  payload: { newMessage: string };
}

export type FriendType = { id: number; name: string };

export interface FriendsState {
  friends: FriendType[];
}

export type PostType = { id: number; message: string; likeCount: number };

export type ContactType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

export type PhotoType = {
  small: string | null;
  large: string | null;
};

export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactType;
  photos: PhotoType;
};

export interface ProfileState {
  postData: PostType[];
  profile: ProfileType | null;
  status: string | null;
}

export interface AddPostActionType {
  type: ProfileActionTypes.ADD_POST;
  payload: { newPostText: string };
}
export interface SetUserProfile {
  type: ProfileActionTypes.SET_USER_PROFILE;
  payload: { profile: ProfileType };
}
export interface SetStatus {
  type: ProfileActionTypes.SET_STATUS;
  payload: { status: string };
}
export interface SavePhotoSuccess {
  type: ProfileActionTypes.SAVE_PHOTO_SUCCESS;
  payload: { photos: PhotoType };
}
export interface SaveProfileSuccess {
  type: ProfileActionTypes.SAVE_PHOTO_SUCCESS;
  payload: { photos: PhotoType };
}

export type UserType = {
  id: number;
  name: string;
  status: string;
  photos: PhotoType;
};
export interface UsersState {
  usersData: UserType[];
  pageSize: number;
  totalUsersCount: number | null;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: number[];
}

export type UsersSelectorState = { usersPage: UsersState };

export interface FollowSuccessActionType {
  type: UsersActionTypes.FOLLOW;
  payload: { userId: number };
}
export interface UnFollowSuccessActionType {
  type: UsersActionTypes.UNFOLLOW;
  payload: { userId: number };
}
export interface SetUsersActionType {
  type: UsersActionTypes.SET_USERS;
  payload: { usersData: UserType };
}
export interface SetTotalUsersCountActionType {
  type: UsersActionTypes.SET_TOTAL_USERS_COUNT;
  payload: { count: number };
}

export interface SetCurrentPageActionType {
  type: UsersActionTypes.SET_CURRENT_PAGE;
  payload: { currentPage: number };
}
export interface ToggleIsFetchingActionType {
  type: UsersActionTypes.TOGGLE_IS_FETCHING;
  payload: { isFetching: boolean };
}
export interface ToggleIsFollowingProgressActionType {
  type: UsersActionTypes.TOGGLE_IS_FOLLOWING_PROGRESS;
  payload: { isFetching: boolean; userId: number };
}

export enum ProfileActionTypes {
  ADD_POST = 'profile/ADD-POST',
  SET_USER_PROFILE = 'profile/ADD-SET_USER_PROFILE',
  SET_STATUS = 'profile/SET_STATUS-POST',
  SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS-POST',
}
