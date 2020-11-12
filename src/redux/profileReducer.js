import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS";

const initialState = {
  postData: [
    {
      id: 1,
      message: "Hi, nice day",
      likeCount: 15,
    },
    {
      id: 2,
      message: "Hello, it's my first post",
      likeCount: 12,
    },
  ],
  profile: null,
  status: "1",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postData: [
          ...state.postData,
          {
            id: 5,
            message: action.newPostText,
            likeCount: 0,
          },
        ],
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }
    default: {
      return state;
    }
  }
};
//action creator
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});
export const saveProfileSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});
//thunk creator
export const getProfile = (userId) => async (dispatch) => {
  const data = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(data));
};
export const getStatus = (userId) => async (dispatch) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setStatus(data));
};
export const updateStatus = (status) => async (dispatch) => {
  try {
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) dispatch(setStatus(status));
  } catch (reject) {
    alert(reject);
  }
};
export const savePhoto = (file) => async (dispatch) => {
  const data = await profileAPI.savePhoto(file);
  if (data.resultCode === 0) dispatch(savePhotoSuccess(data.data.photos));
};
export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const data = await profileAPI.saveProfile(profile);
  if (data.resultCode === 0) dispatch(getProfile(userId));
  else {
    const message = data.messages[0].replace(/.*\->\W*/gi, "");
    //сделать подсказку невалидных полей
    // const a = message.slice(0, message.length - 1);
    dispatch(stopSubmit("profileInfo", { _error: data.messages[0] }));
    return Promise.reject(data.messages[0]); //??(возвращает ошибку)
  }
};

export default profileReducer;
