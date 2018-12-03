import { combineReducers } from 'redux';
import { RootState, RootActions } from '../Types';
import { counterReducer } from './Counter';
import { controllerReducer } from './Controller';
import { apiReducer } from './Api';

export const rootReducer = combineReducers<RootState, RootActions>({
    counter: counterReducer,
    controller: controllerReducer,
    api: apiReducer,
});
