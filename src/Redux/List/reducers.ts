import {EDIT_ITEM, ListActionTypes, ListItem, ListState, SELECT_ITEM} from "./types";
import  "../../Business/StorageService"
import storaService from "../../Business/StorageService";
import {FilterAction, UPDATE_TEXT} from "../Filter/types";

const initialState: ListState = {
    recipes: storaService.getRecipes().map(item => {
        return {
            id: item.id,
            isSelected: false,
            name: item.name,
            price: item.price,
            img: item.img,
            recipyDesctiption: item.recipyDesctiption
        }
    })
}

export function listReducer(state = initialState, action: ListActionTypes | FilterAction) : ListState {
    switch (action.type) {
        case EDIT_ITEM: {
            return  state
        }
        case SELECT_ITEM: {
            return  state
        }
        case UPDATE_TEXT: {
            const items = storaService.getRecipes().map(item => {
                return {
                    id: item.id,
                    isSelected: false,
                    name: item.name,
                    price: item.price,
                    img: item.img,
                    recipyDesctiption: item.recipyDesctiption
                }
            })
            if (action.payload) {
                return {
                    ...state,
                    recipes: items.filter(item => {
                        return item.name.includes(action.payload) || item.recipyDesctiption.includes(action.payload)
                    })
                }
            }
            return {
                ...state,
                recipes: items
            }
        }
        default:
            return state
    }
}
