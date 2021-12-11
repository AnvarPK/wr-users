import { getLocalUsers } from "../../helper/getLocal";
import { ADD_USER, SET_USERS } from "../consts";

export const userReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_USER:
      return [...state, payload];
    case SET_USERS:
        console.log(payload)
      return [...payload];
    default:
      return state;
  }
};
