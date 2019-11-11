import {SAVE_ACTON, CANCEL_ACTION, DESCRIPTION_UPDATED, NAME_UPDATED, EditorAction, IMAGE_UPDATED} from "./types";
import {FileParam, InputParam} from "../../Common/constants";

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

export function imageUpdatedAction(param: FileParam) {
    return {
        type: IMAGE_UPDATED,
        payload: param
    }
}

export function nameUpdatedAction(param: InputParam) {
    return {
        type: NAME_UPDATED,
        payload: param.currentTarget.value
    }
}

export function descriptionUpdatedAction(param: InputParam) {
    return {
        type: DESCRIPTION_UPDATED,
        payload: param.currentTarget.value
    }
}
