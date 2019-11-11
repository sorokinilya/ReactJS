import {EDIT_ITEM, ListActionTypes, ListItem, ListState, SELECT_ITEM} from "./types";
import "../../Business/StorageService"
import storaService from "../../Business/StorageService"
import {CLEAR_ACTION, FilterAction, UPDATE_TEXT} from "../Filter/types"
import {EditorAction, SAVE_ACTON} from "../Editor/types"

function items(filter: string): ListItem[]  {
   const value = storaService.getRecipes().map(item => {
        return {
            id: item.id,
            isSelected: false,
            name: item.name,
            price: item.price,
            img: item.img,
            recipyDesctiption: item.recipyDesctiption
        }
    })
    if (filter) {
        return value.filter(item => {
            return item.name.includes(filter) || item.recipyDesctiption.includes(filter)
        })
    }
    return value
}

const initialState: ListState = {
    recipes: items('')
}

export function listReducer(state = initialState, action: ListActionTypes | FilterAction | EditorAction) : ListState {
    switch (action.type) {
        case EDIT_ITEM: {
            return  state
        }
        case SELECT_ITEM: {
            let items =  state.recipes
            items.forEach(item => {
                item.isSelected = item.id === action.payload.id
            })
            return {
                ...state,
                recipes: items
            }
        }
        case SAVE_ACTON:
            return  {
                ...state,
                recipes: items('')
            }
        case CLEAR_ACTION:
            return {
                ...state,
                recipes: items('')
        }
        case UPDATE_TEXT: {
            return {
                ...state,
                recipes: items(action.payload)
            }
        }
        default:
            return state
    }
}
