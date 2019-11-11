import { Middleware, Dispatch } from "redux"
import {EditorState, SAVE_ACTON} from "./Editor/types"
import storaService from "../Business/StorageService";

export const editorMiddleware: Middleware<{}> = api => (
    next: Dispatch
) => action => {
        switch (action.type) {
        case SAVE_ACTON: {
            const model: EditorState = api.getState().editorReducer
            if  (model.id === 0) {
                const ids: number[] = storaService.getRecipes().map(val => (
                    val.id
                ));
                model.id = Math.max(...ids) + 1
            }
            storaService.addRecipe({
                id: model.id,
                img: model.img,
                name: model.name,
                price: 0,
                recipyDesctiption: model.recipyDesctiption
            })
        }
    }
    return next(action)
}
