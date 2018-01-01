import {
  CURRENT_USER_LOGIN_IS_LOADING,
  CURRENT_USER_LOGIN_HAS_ERRORED,
  CURRENT_USER_IS_LOGGED_IN,
  CURRENT_USER_FETCH_DATA_SUCCESS
} from "./constants";

export const currentUserLoginHasErrored = bool => ({
  type: CURRENT_USER_LOGIN_HAS_ERRORED,
  currentUserHasErrored: bool
});

export const currentUserIsLoggedIn = bool => ({
  type: CURRENT_USER_IS_LOGGED_IN,
  currentUserIsLoggedIn: bool
});

export const currentUserFetchDataSuccess = currentUser => ({
  type: CURRENT_USER_FETCH_DATA_SUCCESS,
  currentUser
});

export const currentUserLoginIsLoading = bool => ({
  type: CURRENT_USER_LOGIN_IS_LOADING,
  currentUserIsLoading: bool
});

export const login = (url, form) => dispatch => {
  dispatch(currentUserLoginIsLoading(true));

  fetch(url, {
    method: "POST",
    body: form
  })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(currentUserLoginIsLoading(false));

      return response;
    })
    .then(response => response.json())
    .then(user => {
      dispatch(currentUserIsLoggedIn(user.success));
      if (user.success === true) dispatch(currentUserFetchDataSuccess(user));
    })
    .catch(() => dispatch(currentUserLoginHasErrored(true)));
};

export const signUp = (url, form) => dispatch => {
  fetch(url, {
    method: "POST",
    body: form
  })
    .then(response => {
      if (!response.ok) throw Error(response.statusText);

      dispatch(currentUserLoginIsLoading(false));

      return response;
    })
    .then(response => response.json())
    .then(user => {
      if (user.success === true) dispatch(currentUserIsLoggedIn(user.success));
      console.log(user);
    })
    .catch(() => {});
};

export const logout = (url, form) => dispatch => {
  dispatch(currentUserIsLoggedIn(false));
};
