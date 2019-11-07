import {CANCEL_ACTION, DESCRIPTION_UPDATED, EditorAction, EditorState, NAME_UPDATED, SAVE_ACTON} from "./types";
import {ADD_ACTION, FilterAction} from "../Filter/types";

const initialState: EditorState =  {
    isActive: false,
    id: 0,
    name: '',
    price: 0,
    // img: string
    recipyDesctiption: ''
}

export function editorReducer(state: EditorState = initialState, action: EditorAction | FilterAction) : EditorState {
    switch (action.type) {
        case  SAVE_ACTON:
            return {
                ...state,
                isActive: false
            }
        case CANCEL_ACTION:
            return {
                ...state,
                isActive: false
            }
            return state
        case NAME_UPDATED:
            return state
        case DESCRIPTION_UPDATED:
            return  state
        case ADD_ACTION:
            return {
                ...state,
                isActive: true
            }
        default:
            return state
    }
}
