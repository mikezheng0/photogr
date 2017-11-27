import { combineReducers } from 'redux';
import {photos,photo, photosIsLoading, photosHasErrored} from '../Core/Photo/PhotoList/reducers'

export default combineReducers({
  photo,
  photos, 
  photosIsLoading,
  photosHasErrored
});