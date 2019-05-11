import { combineReducers } from "redux";
import noteReducers from "./noteReducers";

export default combineReducers({
  notes: noteReducers
});
