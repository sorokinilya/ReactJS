import {EDIT_ITEM, ListActionTypes, ListItem, SELECT_ITEM} from "./types";

export function editItem(item: ListItem): ListActionTypes {
    return {
        type: EDIT_ITEM,
        payload: item
    }
}

export function selectItem(item: ListItem): ListActionTypes {
    return {
        type: SELECT_ITEM,
        payload: item
    }
}
