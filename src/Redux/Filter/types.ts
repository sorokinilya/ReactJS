
export const CLEAR_ACTION = 'CLEAR_ACTION';
export const UPDATE_TEXT = 'UPDATE_TEXT';
export const ADD_ACTION = 'ADD_ACTION';

export interface FilterState {
    searchString: string
    buttonText: string
}

interface ClearAction {
    type: typeof CLEAR_ACTION
}

interface UpdateTextAction {
    type: typeof UPDATE_TEXT
    payload: string
}

interface AddAction {
    type: typeof ADD_ACTION
}

export type FilterAction = UpdateTextAction | ClearAction | AddAction;
