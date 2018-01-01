import React, { Component } from "react";
import { login as userLogin } from "../../../Core/LoginStatus/actions";
import { connect } from "react-redux";
import {BASE_URL, LOGIN} from "../../../Configurations"

export default WrappedComponent => {
  class Container extends Component {
    constructor(props) {
      super(props);
      this.handleLogin = this.handleLogin.bind(this);
      this.handleSignUp = this.handleSignUp.bind(this);
    }

    render() {
      return (
        <WrappedComponent
          handleLogin={this.handleLogin}
          handleSignUp={this.handleSignUp}
          {...this.props}
        />
      );
    }

    handleLogin(e) {
      e.preventDefault();
      const form = new FormData(e.target);
      this.props.login(`${BASE_URL}/${LOGIN}`, form);
    }

    handleSignUp(e) {
      e.preventDefault();
      const form = new FormData(e.target);
      this.props.login("", form);
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
      login: (url, form) => dispatch(userLogin(url, form))
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(Container);
};
