import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { filterMiddleware } from "./middlewares";


import {filterReducer} from "./Filter/reducers";
import {listReducer} from "./List/reducers";

const rootReducer =  combineReducers({ filterReducer, listReducer });

export type AppState = ReturnType<typeof rootReducer>;

export function configureStore() {
    const middlewares = [thunkMiddleware, filterMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        composeWithDevTools(middleWareEnhancer)
    );

    return store;
}
