import { USERS_HAS_ERRORED, 
  USERS_ARE_LOADING,
  USERS_FETCH_DATA_SUCCESS,
  USER_FETCH_DATA_SUCCESS
 } from './constants'

export function usersHasErrored(state = false, action) {
  switch(action.type) {
    case USERS_HAS_ERRORED:
      return action.hasErrored
    default:
      return state
  }
}

export function usersIsLoading (state=false, action) {
  switch (action.type) {
    case USERS_ARE_LOADING: 
      return action.isLoading
    default:
      return state
  }
}

export function users(state = [], action) {
  switch (action.type) {
    case USERS_FETCH_DATA_SUCCESS:
      return action.users
    default: 
      return state
  }
}

export function user(state = {}, action){
  switch (action.type) {
    case USER_FETCH_DATA_SUCCESS:
      return action.user
    default:
      return state
  }
}