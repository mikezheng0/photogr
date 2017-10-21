import { PhotoAPIAction, PhotoAPIActions } from './actions';
import { IPhotoList, IPhoto } from './model';
import { indexBy, prop } from 'ramda';
import { Reducer,Action } from 'redux';

const INITIAL_STATE: IPhotoList = {
  items: {},
  loading: false,
  error: null,
};

export function createPhotoAPIReducer() {
  return function photoReducer(state: IPhotoList = INITIAL_STATE,
    a: Action): IPhotoList {

    const action = a as PhotoAPIAction;

    switch (action.type) {
      case PhotoAPIActions.LOAD_STARTED:
        return {
          ...state,
          items: {},
          loading: true,
          error: null,
        };
      case PhotoAPIActions.LOAD_SUCCEEDED:
        return {
          ...state,
          items: indexBy(prop('id'), action.payload),
          loading: false,
          error: null,
        };
      case PhotoAPIActions.LOAD_FAILED:
        return {
          ...state,
          items: {},
          loading: false,
          error: action.error,
        };
    }

    return state;
  };
}

