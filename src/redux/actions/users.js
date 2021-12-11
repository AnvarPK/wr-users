import { setLocalUsers } from "../../helper/setLocal";
import { userServices } from "../../services/users";
import { ADD_USER, SET_USERS } from "../consts";

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export const setUser = (payload) => ({
  type: SET_USERS,
  payload,
});

export const fetchUser = () => {
  return async (dispatch) => {
    const response = await userServices.fetchUsers();
    setLocalUsers(response.results);
    dispatch(setUser(response.results));
  };
};
