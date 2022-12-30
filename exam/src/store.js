import {createStore, combineReducers} from "redux";
import {langReducer} from "./reducers/LangReducer";
import {textReducer} from "./reducers/TextReducer";

export const defaultState={
    language:'',
    text:'',
}

const rootReducer = combineReducers({
    Lang:langReducer,
    Text:textReducer,
})

export const store = createStore(rootReducer)