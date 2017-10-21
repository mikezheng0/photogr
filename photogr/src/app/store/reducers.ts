import { combineReducers, Action } from 'redux'
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';

import { IAppState } from './model'
import { INCREMENT } from '../actions/actions'
import { createPhotoAPIReducer } from '../components/photo/reducer'
export const rootReducer = composeReducers(
    defaultFormReducer(),
    combineReducers({
        homepage: createPhotoAPIReducer(),
        routes: routerReducer
    }))


