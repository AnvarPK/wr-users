import { LOGIN_USER, LOGOUT_USER } from "../consts";

const loginDefaultState = {
  username: "Invalid User",
  isAuthenticated: null,
};

export const loginReducer = (state = loginDefaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_USER:
      const { username, isAuthenticated } = payload;
      return { username, isAuthenticated };
    case LOGOUT_USER:
      return loginDefaultState;
    default:
      return state;
  }
};
