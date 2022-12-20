import { combineReducers } from "redux";
import viewReduser from "./viewReduser";
import messageReduser from "./messageReduser";
import activeUserReducer from "./activeUserReducer";

export default combineReducers({
    viewReduser,
    messageReduser,
    activeUserReducer,
});
