import { getLocalUsers } from "../../helper/getLocal";
import { ADD_USER, SET_USERS } from "../consts";

export const userReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_USER:
      return [...state, { user: payload }];
    case SET_USERS:
      return [...payload];
    default:
      return state;
  }
};
