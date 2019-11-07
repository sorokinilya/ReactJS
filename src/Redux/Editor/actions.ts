import { SAVE_ACTON, CANCEL_ACTION, DESCRIPTION_UPDATED, NAME_UPDATED, EditorAction } from "./types";
import {InputParam} from "../../Common/constants";

export function saveAction() {
    return {
        type: SAVE_ACTON
    }
}

export function closeAction() {
    return {
        type: CANCEL_ACTION
    }
}

export function nameUpdatedAction(param: InputParam) {
    return {
        type: CANCEL_ACTION,
        payload: param.currentTarget.value
    }
}

export function descriptionUpdatedAction(param: InputParam) {
    return {
        type: typeof CANCEL_ACTION,
        payload: param.currentTarget.value
    }
}
