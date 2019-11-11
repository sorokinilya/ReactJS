import {ADD_ACTION, FilterAction, FilterState, CLEAR_ACTION, UPDATE_TEXT} from "./types"
import {EditorAction, SAVE_ACTON} from "../Editor/types"

const initialState: FilterState = {
    searchString: '',
    buttonText: 'Clear'
}

export function filterReducer(state: FilterState = initialState, action: FilterAction | EditorAction) : FilterState {
        switch (action.type) {
            case CLEAR_ACTION:
                return  {
                    ...state,
                    searchString: ''
                }
            case UPDATE_TEXT:
                return  {
                    ...state,
                    searchString: action.payload
                }
            case ADD_ACTION:
                return  state;
            case SAVE_ACTON:
                return {
                    ...state,
                    searchString: ''
                }
            default:
                return state;
        }
}
