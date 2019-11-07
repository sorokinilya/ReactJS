import { SEARCH_ACTION, UPDATE_TEXT, ADD_ACTION, FilterAction } from "./types";
import {InputParam} from "../../Common/constants";

export function updateText(param: InputParam): FilterAction {
    return {
        type: UPDATE_TEXT,
        payload: param.currentTarget.value
    }
}

export function searchAction(): FilterAction {
    return {
        type: SEARCH_ACTION
    }
}

export function addAction(): FilterAction {
    return {
        type: ADD_ACTION
    }
}
