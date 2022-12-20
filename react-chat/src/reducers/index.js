import { combineReducers } from "redux";
import viewReduser from "./viewReduser";
import messageReduser from "./messageReduser";
import activeUserReduser from "./activeUserReduser";

export default combineReducers({
    viewReduser,
    messageReduser,
    activeUserReduser,
});
