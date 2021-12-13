import { LOGIN_USER, LOGOUT_USER } from "../consts";

export const loginUser = (payload) => ({
    type: LOGIN_USER,
    payload
})

export const logoutUser = () => ({
    type: LOGOUT_USER,
    payload: null
})