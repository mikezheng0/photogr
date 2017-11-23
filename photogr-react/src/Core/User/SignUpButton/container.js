import React, {Component} from 'react'

export default (WrappedComponent) => 
  class withSignUp extends Component {
    constructor(props) {
      super(props)

      this.handleSignIn = this.handleSignIn.bind(this);
    }
    render() {
      return (
        <WrappedComponent {...this.props}/>
      )
    }

    handleSignIn() {
    }
  }