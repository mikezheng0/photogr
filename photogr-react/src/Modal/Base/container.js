import React, {Component} from 'react'

export default (WrappedComponent) => 
  class Container extends Component {

    render() {
      if(!this.props.show) 
        return null

      return (
        <WrappedComponent {...this.props}/>
      )
    }
  }