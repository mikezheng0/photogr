import {
  PHOTOS_HAS_ERRORED,
  PHOTOS_ARE_LOADING,
  PHOTOS_FETCH_DATA_SUCCESS,
  PHOTO_FETCH_DATA_SUCCESS
} from "../constants";

export function photosHasErrored(state = false, action) {
  switch (action.type) {
    case PHOTOS_HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
}

export function photosIsLoading(state = false, action) {
  switch (action.type) {
    case PHOTOS_ARE_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function photos(state = [], action) {
  switch (action.type) {
    case PHOTOS_FETCH_DATA_SUCCESS:
      return action.photos;
    default:
      return state;
  }
}

export function photo(state = {}, action) {
  switch (action.type) {
    case PHOTO_FETCH_DATA_SUCCESS:
      return action.photo;
    default:
      return state;
  }
}
