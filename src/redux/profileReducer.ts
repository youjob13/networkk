import { stopSubmit } from 'redux-form';
import { profileAPI } from '../api/api';
import {
  AddPostActionType,
  PhotoType,
  ProfileActionTypes,
  ProfileState,
  ProfileType,
  SavePhotoSuccess,
  SaveProfileSuccess,
  SetStatus,
  SetUserProfile,
} from '../shared/models/store';

const initialState: ProfileState = {
  postData: [
    {
      id: 1,
      message: 'Hi, nice day',
      likeCount: 15,
    },
    {
      id: 2,
      message: "Hello, it's my first post",
      likeCount: 12,
    },
  ],
  profile: null,
  status: '1',
};

const profileReducer = (state = initialState, action: any): ProfileState => {
  switch (action.type) {
    case ProfileActionTypes.ADD_POST: {
      return {
        ...state,
        postData: [
          ...state.postData,
          {
            id: 5,
            message: action.payload.newPostText,
            likeCount: 0,
          },
        ],
      };
    }
    case ProfileActionTypes.SET_USER_PROFILE: {
      return { ...state, profile: action.payload.profile };
    }
    case ProfileActionTypes.SET_STATUS: {
      return {
        ...state,
        status: action.payload.status,
      };
    }
    case ProfileActionTypes.SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.payload.photos,
        } as ProfileType, // TODO: remove
      };
    }
    default: {
      return state;
    }
  }
};

// action creator
export const addPost = (newPostText: string): AddPostActionType => ({
  type: ProfileActionTypes.ADD_POST,
  payload: { newPostText },
});
export const setUserProfile = (profile: ProfileType): SetUserProfile => ({
  type: ProfileActionTypes.SET_USER_PROFILE,
  payload: { profile },
});
export const setStatus = (status: string): SetStatus => ({
  type: ProfileActionTypes.SET_STATUS,
  payload: { status },
});
export const savePhotoSuccess = (photos: PhotoType): SavePhotoSuccess => ({
  type: ProfileActionTypes.SAVE_PHOTO_SUCCESS,
  payload: { photos },
});
export const saveProfileSuccess = (photos: PhotoType): SaveProfileSuccess => ({
  type: ProfileActionTypes.SAVE_PHOTO_SUCCESS,
  payload: { photos },
});

// thunk creator
export const getProfile = (userId: number) => async (dispatch: any) => {
  const data = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(data));
};
export const getStatus = (userId: number) => async (dispatch: any) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setStatus(data));
};
export const updateStatus = (status: string) => async (dispatch: any) => {
  try {
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) dispatch(setStatus(status));
  } catch (reject) {
    alert(reject);
  }
};
export const savePhoto = (file: any) => async (dispatch: any) => {
  const data = await profileAPI.savePhoto(file);
  if (data.resultCode === 0) dispatch(savePhotoSuccess(data.data.photos));
};
export const saveProfile =
  (profile: ProfileType) =>
  async (dispatch: any, getState: any): Promise<any> => {
    const { userId } = getState().auth;
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
      dispatch(getProfile(userId));
      return;
    }
    const message = data.messages[0].replace(/.*->\W*/gi, '');
    // сделать подсказку невалидных полей
    // const a = message.slice(0, message.length - 1);
    dispatch(stopSubmit('profileInfo', { _error: data.messages[0] }));
    Promise.reject(data.messages[0]); // ??(возвращает ошибку)
  };

export default profileReducer;
