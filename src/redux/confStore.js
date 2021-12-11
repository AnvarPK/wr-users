import { createStore, combineReducers } from "redux";
import { userReducer } from "./reducers/users";

const configStore = () =>
  createStore(
    combineReducers({
      users: userReducer,
    })
  );
  
export default configStore;
