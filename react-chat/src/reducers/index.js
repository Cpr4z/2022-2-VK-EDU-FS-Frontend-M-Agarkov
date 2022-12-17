import { combineReducers } from "redux";
import viewReduser from "./viewReduser";
import messageReduser from "./messageReduser";

export default combineReducers({
    viewReduser,
    messageReduser,
});
