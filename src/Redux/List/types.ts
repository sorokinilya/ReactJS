export const EDIT_ITEM = 'EDIT_ITEM';
export const SELECT_ITEM = 'SELECT_ITEM';

export interface ListItem {
    id: number
    isSelected: boolean
    name: string
    price: number
    img: string
    recipyDesctiption: string
}

export interface ListState {
    recipes: ListItem[]
}

interface EditItemAction {
    type: typeof EDIT_ITEM
    payload: ListItem
}

interface SelectItemAction {
    type: typeof SELECT_ITEM
    payload: ListItem
}

export type ListActionTypes = EditItemAction | SelectItemAction

