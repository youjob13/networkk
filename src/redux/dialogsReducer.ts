import {DialogsActionTypes, DialogsState, SendMessageActionType} from "../shared/models/store";

const initialState: DialogsState = {
  dialogsData: [
    { id: 1, name: "Viktor" },
    {
      id: 2,
      name: "Eldar",
    },
    {
      id: 3,
      name: "Vladimir",
    },
    {
      id: 4,
      name: "Vasya",
    },
  ],
  messagesData: [
    {
      id: 1,
      message: "Hi, give me money",
    },
    {
      id: 2,
      message: "We go walk?",
    },
    {
      id: 3,
      message: "I, get my money",
    },
  ],
};

const dialogsReducer = (state = initialState, action: any): DialogsState => {
  switch (action.type) {
    case DialogsActionTypes.SEND_MESSAGE: {
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: 4, message: action.payload.newMessage },
        ],
      };
    }
    default: {
      return state;
    }
  }
};

//action creator
export const sendMessage = (newMessage: string): SendMessageActionType => ({
  type: DialogsActionTypes.SEND_MESSAGE,
  payload: {newMessage},
});

export default dialogsReducer;
