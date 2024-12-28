import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import fileReducer from "./file/Reducer";

const rootReducer = combineReducers({
    file: fileReducer,
    
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));