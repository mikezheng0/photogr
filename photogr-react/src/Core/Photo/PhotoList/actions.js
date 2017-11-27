import {
  PHOTOS_HAS_ERRORED, 
  PHOTOS_FETCH_DATA_SUCCESS, 
  PHOTOS_ARE_LOADING, 
  PHOTO_FETCH_DATA_SUCCESS
} from '../constants'

export function photosHasErrored(bool) {
  return {
    type: PHOTOS_HAS_ERRORED,
    hasErrored: bool
  }
}

export function photosIsLoading(bool) {
  return {  
    type: PHOTOS_ARE_LOADING,
    isLoading: bool
  }
}

export function photosFetchDataSuccess(photos) {
  return {
    type: PHOTOS_FETCH_DATA_SUCCESS,
    photos
  }
}

export function photoFetchDataSuccess(photo) {
  return {
    type: PHOTO_FETCH_DATA_SUCCESS,
    photo
  }
}

export function photosFetchData(url) {
  return (dispatch) => {
    dispatch(photosIsLoading(true))

    fetch(url)
      .then ((response) => {
        if(!response.ok) {
          throw Error(response.statusText)
        }

        dispatch(photosIsLoading(false))

        return response
      })
      .then((response) => response.json())
      .then((photos)=>dispatch(photosFetchDataSuccess(photos)))
      .catch(()=>dispatch(photosHasErrored(true)))
  }
}

export function photoFetchData(url) {
  return (dispatch) => {
    dispatch(photosIsLoading(true))
    
    fetch(url)
      .then ((response) => {
        if(!response.ok) {
          throw Error(response.statusText)
        }

        dispatch(photosIsLoading(false))

        return response
      })
      .then((response) => response.json())
      .then((photo)=>dispatch(photoFetchDataSuccess(photo)))
      .catch(()=>dispatch(photosHasErrored(true)))
  }
}