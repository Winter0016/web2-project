import { combineReducers } from "redux";
import bookReducer from "./Patron/reducer";

const reducer = () =>
  combineReducers({
    bookReducer,
  });

export default reducer;
