import { get } from "../api";
import { APP_CONSTANTS } from "../appconsts";

const fetchUsers = async () => {
  return get(APP_CONSTANTS.URLS.FETCH_USERS);
};

const authenticateUser = async (username, password) => {
  const user = await get(APP_CONSTANTS.URLS.USER_CREDENTIALS);
  if (user.username === username && user.password === password) {
    return { username: user.username, isAuthenticated: true };
  }
  return { username: 'Invalid User', isAuthenticated: false };
};

export const userServices = {
  fetchUsers,
  authenticateUser,
};
