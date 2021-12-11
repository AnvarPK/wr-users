import { getLocalUsers } from "../../helper/getLocal";
import { setLocalUsers } from "../../helper/setLocal";
import { ADD_USER, SET_USERS } from "../consts";

export const userReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_USER:
      state = [...state, { user: payload }];
      setLocalUsers(state);
      return state;
    case SET_USERS:
      return [...payload];
    default:
      return state;
  }
};
