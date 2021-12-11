import { ADD_USER, SET_USERS } from "../consts";

export const addUser = (payload) => ({
    type: ADD_USER,
    payload
})

export const setUser = (payload) => ({
    type: SET_USERS,
    payload
})