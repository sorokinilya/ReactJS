import {
    CANCEL_ACTION,
    DESCRIPTION_UPDATED,
    EditorAction,
    EditorState,
    IMAGE_UPDATED,
    NAME_UPDATED,
    SAVE_ACTON
} from "./types";
import {ADD_ACTION, FilterAction} from "../Filter/types";
import {EDIT_ITEM, ListActionTypes} from "../List/types";
import {FileParam, InputParam} from "../../Common/constants";

const initialState: EditorState =  {
    isActive: false,
    id: 0,
    name: '',
    price: 0,
    img: 'https://st2.depositphotos.com/2065221/8317/i/950/depositphotos_83178492-stock-photo-wood-spoon-and-fork-with.jpg',
    recipyDesctiption: ''
}

export function editorReducer(state: EditorState = initialState, action: EditorAction | FilterAction | ListActionTypes) : EditorState {
    switch (action.type) {
        case  SAVE_ACTON:
        case CANCEL_ACTION:
            return initialState
        case NAME_UPDATED:
            return {
                ...state,
                name: action.payload
            }
        case DESCRIPTION_UPDATED:
            return {
                ...state,
                recipyDesctiption: action.payload
            }
        case IMAGE_UPDATED:
            let files: FileParam = action.payload
            if (!files || files.length < 1)  {
                return state
            }
            let reader = new FileReader()
            reader.readAsDataURL(files[0])
            let a = reader.result
            return {
                ...state,
                img: ""
            }
        case ADD_ACTION:
            return {
                ...state,
                isActive: true
            }
        case EDIT_ITEM:
            return  {
                isActive: true,
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                img: action.payload.img,
                recipyDesctiption: action.payload.recipyDesctiption
            }
        default:
            return state
    }
}
