import { APP_CONSTANTS } from "../appconsts";

export const getLocalUsers = () => {
    let users = []
    try {
        users = JSON.parse(localStorage.getItem(APP_CONSTANTS.STORAGE_KEY)) ?? [];

    }
    catch (e) {
        console.error(e);
    }
    return users;
}