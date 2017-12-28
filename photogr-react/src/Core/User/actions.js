import {
  USERS_HAS_ERRORED, 
  USERS_FETCH_DATA_SUCCESS, 
  USERS_ARE_LOADING, 
  USER_FETCH_DATA_SUCCESS
} from './constants'

export function usersHasErrored(bool) {
  return {
    type: USERS_HAS_ERRORED,
    hasErrored: bool
  }
}

export function usersIsLoading(bool) {
  return {  
    type: USERS_ARE_LOADING,
    isLoading: bool
  }
}

export function usersFetchDataSuccess(users) {
  return {
    type: USERS_FETCH_DATA_SUCCESS,
    users
  }
}

export function userFetchDataSuccess(user) {
  return {
    type: USER_FETCH_DATA_SUCCESS,
    user
  }
}

export function usersFetchData(url) {
  return (dispatch) => {
    dispatch(usersIsLoading(true))

    fetch(url)
      .then ((response) => {
        if(!response.ok) {
          throw Error(response.statusText)
        }

        dispatch(usersIsLoading(false))

        return response
      })
      .then((response) => response.json())
      .then((users)=>dispatch(usersFetchDataSuccess(users)))
      .catch(()=>dispatch(usersHasErrored(true)))
  }
}

export function userFetchData(url) {
  return (dispatch) => {
    dispatch(usersIsLoading(true))
    
    fetch(url)
      .then ((response) => {
        if(!response.ok) {
          throw Error(response.statusText)
        }

        dispatch(usersIsLoading(false))

        return response
      })
      .then((response) => response.json())
      .then((user)=>dispatch(userFetchDataSuccess(user)))
      .catch(()=>dispatch(usersHasErrored(true)))
  }
}