import React, { Component } from "react";
import {
  login as userLogin,
  logout as userLogout,
  signUp as userSignUp
} from "../../../Core/LoginStatus/actions";
import { connect } from "react-redux";
import { BASE_URL, LOGIN, SIGN_UP, LOGOUT } from "../../../Configurations";

export default WrappedComponent => {
  class Container extends Component {
    constructor(props) {
      super(props);
      this.handleLogin = this.handleLogin.bind(this);
      this.handleSignUp = this.handleSignUp.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
    }

    render() {
      return (
        <WrappedComponent
          handleLogin={this.handleLogin}
          handleSignUp={this.handleSignUp}
          handleLogout={this.handleLogout}
          {...this.props}
        />
      );
    }

    handleLogin(e) {
      e.preventDefault();
      const form = new FormData(e.target);
      this.props.login(`${BASE_URL}/${LOGIN}`, form);
    }

    handleLogout(e) {
      e.preventDefault();
      this.props.logout(`${BASE_URL}/${LOGOUT}`);
    }

    handleSignUp(e) {
      e.preventDefault();
      const form = new FormData(e.target);
      this.props.signUp(`${BASE_URL}/${SIGN_UP}`, form);
    }
  }

  const mapStateToProps = state => {
    return {
      user: state.currentUser,
      hasErrored: state.currentUserHasErrored,
      isLoading: state.currentUserIsLoading,
      isLoggedIn: state.currentUserIsLoggedIn
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      login: (url, form) => dispatch(userLogin(url, form)),
      logout: url => dispatch(userLogout(url)),
      signUp: (url, form) => dispatch(userSignUp(url, form))
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(Container);
};
