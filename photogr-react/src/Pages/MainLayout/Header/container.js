import React, { Component } from 'react'

export default (WrappedComponent) => 
  class Container extends Component {
    render() {
      return (
        <WrappedComponent {...this.props}/>
      )
    }
  }