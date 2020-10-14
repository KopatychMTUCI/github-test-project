import {combineReducers, createStore} from "redux";
import footerReducer from "./footer-reducer";

const rootReducer = combineReducers({
    footer: footerReducer
})

const store = createStore(rootReducer)

window.store = store

export default store