import { LOGIN_USER } from "../consts";

export const loginUser = (payload) => ({
    type: LOGIN_USER,
    payload
})