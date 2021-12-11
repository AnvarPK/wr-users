import { createStore, combineReducers } from "redux";
import { loginReducer } from "./reducers/login";
import { userReducer } from "./reducers/users";

const configStore = () =>
  createStore(
    combineReducers({
      users: userReducer,
      login: loginReducer,
    })
  );
  
export default configStore;
