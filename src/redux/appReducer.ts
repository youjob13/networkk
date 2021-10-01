import {getAuthorizationThunkCreator} from "./authReducer";
import {AppActionTypes, AppState, InitializedSuccessActionType} from "../shared/models/store";
import {Action} from "redux";

const initialState: AppState = {
  initialized: false,
};

const appReducer = (state = initialState, action: any): AppState => {
  switch (action.type) {
    case AppActionTypes.INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }
    default: {
      return state;
    }
  }
};

//actionCreator
export const initializedSuccess = (): InitializedSuccessActionType => ({
  type: AppActionTypes.INITIALIZED_SUCCESS,
});
//thunkCreator
export const initializeApp = () => (dispatch: any) => {
  const dispatchResult = dispatch(getAuthorizationThunkCreator());
  Promise.all([dispatchResult]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
