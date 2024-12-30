import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import {thunk} from "redux-thunk";
import chatReducer from './chat/Reducer';

const rootReducer = combineReducers({
  chat: chatReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));