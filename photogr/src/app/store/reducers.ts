import { combineReducers, Action } from 'redux'
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';

import { IAppState, ICounter } from './model'
import { INCREMENT } from '../actions/actions'

export const INITIAL_STATE: IAppState = {
    counter: {
        counter: 0
    }
}

export const rootReducer = composeReducers(
    defaultFormReducer(),
    combineReducers({
        counter: countReducer,
        router: routerReducer
    }))

export function countReducer(state: ICounter = { counter : 0}, action: Action): ICounter {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, { counter: state.counter + 1 })
    }
    return state;
}

