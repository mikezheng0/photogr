import {
  CURRENT_USER_LOGIN_IS_LOADING,
  CURRENT_USER_LOGIN_HAS_ERRORED,
  CURRENT_USER_IS_LOGGED_IN,
  CURRENT_USER_FETCH_DATA_SUCCESS
} from "./constants";

export function currentUserLoginHasErrored(state = false, action) {
  switch(action.type) {
    case CURRENT_USER_LOGIN_HAS_ERRORED:
      return action.currentUserHasErrored
    default:
      return state
  }
}

export function currentUserIsLoggedIn(state = false, action) {
  switch(action.type) {
    case CURRENT_USER_IS_LOGGED_IN:
      return action.currentUserIsLoggedIn
    default:
      return state
  }
}

export function currentUserLoginIsLoading (state=false, action) {
  switch (action.type) {
    case CURRENT_USER_LOGIN_IS_LOADING: 
      return action.currentUserIsLoading
    default:
      return state
  }
}

export function currentUser(state = {}, action){
  switch (action.type) {
    case CURRENT_USER_FETCH_DATA_SUCCESS:
      return action.currentUser
    default:
      return state
  }
}