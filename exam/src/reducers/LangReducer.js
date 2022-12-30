import {defaultState} from "../store";

export const langReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_LANG':
            return {language: action.payload}
        default:
            return state
    }
}