import {defaultState} from "../store";

export const textReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return {text: action.payload}
        default:
            return state
    }
}