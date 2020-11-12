import { stopSubmit } from "redux-form";
import { authAPI, securityAPI, profileAPI } from "../api/api";
import photoDefault from "../assests/img/user.png";

const SET_USER_DATA = "auth/SET_USER_DATA";
const SET_USER_PHOTO = "auth/SET_USER_PHOTO";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";

const initialState = {
  userId: null,
  email: null,
  login: null,
  photo: null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SET_USER_PHOTO: {
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

export const setAuthUserData = (userId, login, email, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: { userId, login, email, isAuth },
  };
};
export const setUserPhoto = (photo) => {
  return {
    type: SET_USER_PHOTO,
    photo,
  };
};
export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});
//thunk Creator
export const getAuthorizationThunkCreator = () => async (dispatch) => {
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
  email,
  password,
  rememberMe,
  captcha
) => async (dispatch) => {
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

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logoutThunkCreator = () => async (dispatch) => {
  const data = await authAPI.logout();
  if (data.resultCode === 0) dispatch(setAuthUserData(null, null, null, false));
};

export default authReducer;
