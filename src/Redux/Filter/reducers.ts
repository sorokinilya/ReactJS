import {ADD_ACTION, FilterAction, FilterState, SEARCH_ACTION, UPDATE_TEXT} from "./types";

const initialState: { searchString: string, buttonText: string } = {
    searchString: '',
    buttonText: 'Clear'
};

export function filterReducer(state: FilterState = initialState, action: FilterAction) : FilterState {
        switch (action.type) {
            case SEARCH_ACTION:
                return  state;
            case UPDATE_TEXT:
                return  {buttonText: state.buttonText, searchString: action.payload}
            case ADD_ACTION:
                return  state;
            default:
                return state;
        }
}
