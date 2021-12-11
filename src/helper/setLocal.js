import { APP_CONSTANTS } from "../appconsts";

export const setLocalUsers = (users = []) => {
    try {
        localStorage.setItem(APP_CONSTANTS.STORAGE_KEY, JSON.stringify(users));
    }
    catch (e) {
        console.error(e);
    }
}