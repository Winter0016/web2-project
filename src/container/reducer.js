import { combineReducers } from "redux";
import patronReducer from "./Patron/reducer";

const reducer = () =>
  combineReducers({
    patronReducer,
  });

export default reducer;
