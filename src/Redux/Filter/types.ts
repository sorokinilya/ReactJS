
export const SEARCH_ACTION = 'SEARCH_ACTION';
export const UPDATE_TEXT = 'UPDATE_TEXT';
export const ADD_ACTION = 'ADD_ACTION';

export interface FilterState {
    searchString: string
    buttonText: string
}

interface SearchAction {
    type: typeof SEARCH_ACTION
}

interface UpdateTextAction {
    type: typeof UPDATE_TEXT
    payload: string
}

interface AddAction {
    type: typeof ADD_ACTION
}

export type FilterAction = UpdateTextAction | SearchAction | AddAction;
