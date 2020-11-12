import { getAuthorizationThunkCreator } from "./authReducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";
const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
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
export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});
//thunkCreator
export const initializeApp = () => (dispatch) => {
  const dispatchResult = dispatch(getAuthorizationThunkCreator());
  Promise.all([dispatchResult]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
