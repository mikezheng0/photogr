import { combineReducers } from "redux";
import {
  photos,
  photo,
  photosIsLoading,
  photosHasErrored
} from "../Core/Photo/PhotoList/reducers";
import {
  users,
  user,
  usersIsLoading,
  usersHasErrored
} from "../Core/User/reducers";
import {
  events,
  event,
  eventsIsLoading,
  eventsHasErrored
} from "../Core/Event/reducers";
import {
  currentUser,
  currentUserIsLoggedIn,
  currentUserLoginHasErrored,
  currentUserLoginIsLoading
} from "../Core/LoginStatus/reducers"
export default combineReducers({
  photo,
  photos,
  photosIsLoading,
  photosHasErrored,
  users,
  user,
  usersIsLoading,
  usersHasErrored,
  events,
  event,
  eventsIsLoading,
  eventsHasErrored,
  currentUser,
  currentUserIsLoggedIn,
  currentUserLoginHasErrored,
  currentUserLoginIsLoading
});
