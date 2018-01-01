import {
  EVENT_FETCH_DATA_SUCCESS, 
  EVENTS_ARE_LOADING, 
  EVENTS_HAS_ERRORED,
  EVENTS_FETCH_DATA_SUCCESS
} from './constants'

export function eventsHasErrored(bool) {
  return {
    type: EVENTS_HAS_ERRORED,
    eventsHasErrored: bool
  }
}

export function eventsIsLoading(bool) {
  return {  
    type: EVENTS_ARE_LOADING,
    eventsIsLoading: bool
  }
}

export function eventsFetchDataSuccess(events) {
  return {
    type: EVENTS_FETCH_DATA_SUCCESS,
    events
  }
}

export function eventFetchDataSuccess(event) {
  return {
    type: EVENT_FETCH_DATA_SUCCESS,
    event
  }
}

export function eventsFetchData(url) {
  return (dispatch) => {
    dispatch(eventsIsLoading(true))

    fetch(url)
      .then ((response) => {
        if(!response.ok) {
          throw Error(response.statusText)
        }

        dispatch(eventsIsLoading(false))

        return response
      })
      .then((response) => response.json())
      .then((events)=>dispatch(eventsFetchDataSuccess(events)))
      .catch(()=>dispatch(eventsHasErrored(true)))
  }
}

export function eventFetchData(url) {
  return (dispatch) => {
    dispatch(eventsIsLoading(true))
    
    fetch(url)
      .then ((response) => {
        if(!response.ok) {
          throw Error(response.statusText)
        }

        dispatch(eventsIsLoading(false))

        return response
      })
      .then((response) => response.json())
      .then((event)=> dispatch(eventFetchDataSuccess(event)))
      .catch(()=>dispatch(eventsHasErrored(true)))
  }
}