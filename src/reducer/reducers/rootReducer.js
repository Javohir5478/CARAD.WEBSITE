import { combineReducers } from "redux";
import { carReducer } from "./carReducer";
 export const rootReducer = combineReducers({
    post: carReducer,
})