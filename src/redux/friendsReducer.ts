import {FriendsState} from "../shared/models/store";

const initialState: FriendsState = {
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
};

const friendsProducer = (state = initialState, action: any): FriendsState => {
  return state;
};

export default friendsProducer;
