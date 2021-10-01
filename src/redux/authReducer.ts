import {authAPI, profileAPI, securityAPI} from "../api/api";
import photoDefault from "../assests/img/user.png";
import {
  AuthActionTypes,
  AuthState,
  GetCaptchaUrlSuccess,
  SetAuthUserDataActionType,
  SetUserPhotoActionType
} from "../shared/models/store";
import {stopSubmit} from "redux-form";

const initialState: AuthState = {
  userId: null,
  email: null,
  login: null,
  photo: null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_USER_DATA:
    case AuthActionTypes.GET_CAPTCHA_URL_SUCCESS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case AuthActionTypes.SET_USER_PHOTO: {
      return {
        ...state,
        photo: action.photo,
      };
    }
    default: {
      return state;
    }
  }
};

export const setAuthUserData = (
    userId: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
): SetAuthUserDataActionType => ({
  type: AuthActionTypes.SET_USER_DATA,
  payload: { userId, login, email, isAuth },
})

export const setUserPhoto = (photo: string): SetUserPhotoActionType => ({
  type: AuthActionTypes.SET_USER_PHOTO,
  payload: {photo},
})

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccess => ({
  type: AuthActionTypes.GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

//thunk Creator
export const getAuthorizationThunkCreator = () => async (dispatch: any) => {
  const data = await authAPI.getAuthorization();
  if (data.resultCode === 0) {
    const { id, login, email } = data.data;
    dispatch(setAuthUserData(id, login, email, true));
    //if login === true -> setPhotos
    const response = await profileAPI.getProfile(id);
    if (response.photos.small === null) dispatch(setUserPhoto(photoDefault));
    else dispatch(setUserPhoto(response.photos.small));
  }
  return data;
};

export const loginThunkCreator = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: any
) => async (dispatch: any) => {
  const response = await authAPI.login(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) dispatch(getAuthorizationThunkCreator());
  else {
    if (response.data.resultCode === 10) dispatch(getCaptchaUrl());
    const message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error";
    dispatch(stopSubmit("login", { _error: `${message}` }));
  }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logoutThunkCreator = () => async (dispatch: any) => {
  const data = await authAPI.logout();
  if (data.resultCode === 0) dispatch(setAuthUserData(null, null, null, false));
};

export default authReducer;
