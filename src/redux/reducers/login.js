import { LOGIN_USER } from "../consts";

export const loginReducer = (state = { userAuthenticated: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_USER:
        console.log({payload});
      return { userAuthenticated: payload };
    default:
      return state;
  }
};
