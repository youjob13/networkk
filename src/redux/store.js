import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";

const store = {
  _state: {
    profilePage: {
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
        {
          id: 3,
          message: "Good!",
          likeCount: 1,
        },
      ],
      newsPostText: "",
    },
    dialogsPage: {
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
      // переделать в json
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
      newsMessageText: "",
    },
    friendsPage: {
      friends: [
        {
          id: 1,
          name: "Viktor",
        },
        {
          id: 2,
          name: "Polyna",
        },
        {
          id: 3,
          name: "Eldar",
        },
        {
          id: 4,
          name: "Mary",
        },
        {
          id: 5,
          name: "Denis",
        },
      ],
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.friendsPage = friendsReducer(this._state.friendsPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
