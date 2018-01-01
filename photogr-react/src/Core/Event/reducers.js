import {
  EVENT_FETCH_DATA_SUCCESS, 
  EVENTS_ARE_LOADING, 
  EVENTS_HAS_ERRORED,
  EVENTS_FETCH_DATA_SUCCESS
} from './constants'

export function eventsHasErrored(state = false, action) {
  switch (action.type) {
    case EVENTS_HAS_ERRORED:
      return action.eventsHasErrored;
    default:
      return state;
  }
}

export function eventsIsLoading(state = false, action) {
  switch (action.type) {
    case EVENTS_ARE_LOADING:
      return action.eventsIsLoading;
    default:
      return state;
  }
}

export function events(state = [], action) {
  switch (action.type) {
    case EVENTS_FETCH_DATA_SUCCESS:
      return action.events;
    default:
      return state;
  }
}

export function event(state = {}, action) {
  switch (action.type) {
    case EVENT_FETCH_DATA_SUCCESS:
      return action.event;
    default:
      return state;
  }
}
