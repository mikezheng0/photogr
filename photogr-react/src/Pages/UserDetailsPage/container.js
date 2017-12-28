import React, {Component} from 'react'
import {connect} from 'react-redux'
import {userFetchData} from '../../Core/User/actions'

export default (WrappedComponent) => {
  class Container extends Component {
    componentWillMount() {
      this.props.fetchData(`http://5a1c09b5c3630f0012b24281.mockapi.io/photogr/user/1`)
    }
    
    render() {
      if (this.props.hasErrored) {
        return <p>Sorry! There was an error loading the items</p>;
      }

      if (this.props.isLoading) {
          return <p>Loading…</p>;
      }
      return (
        <WrappedComponent {...this.props}/>
      )
    }

    onClickPhoto() {
        
    }
  }

  const mapStateToProps = (state) => ({
    user: state.user,
    hasErrored: state.usersHasErrored,
    url: '/photo-detail',
    isLoading: state.usersIsLoading
  })

  const mapDispatchToProps= (dispatch) => ({
    fetchData: (url) => dispatch(userFetchData(url)),
    onClickPhoto: this.onClickPhoto
  })
  return connect(mapStateToProps,mapDispatchToProps)(Container)
}