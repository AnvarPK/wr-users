import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { loginReducer } from "./reducers/login";
import { userReducer } from "./reducers/users";

const configStore = () =>
  createStore(
    combineReducers({
      users: userReducer,
      login: loginReducer,
    }),
    applyMiddleware(thunk)
  );

export default configStore;
