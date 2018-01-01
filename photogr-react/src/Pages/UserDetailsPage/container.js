import React, {Component} from 'react'
import {connect} from 'react-redux'
import {userFetchData} from '../../Core/User/actions'
import { BASE_URL, USERS } from "../../Configurations"

export default (WrappedComponent) => {
  class Container extends Component {
    componentWillMount() {
      this.props.fetchData(`${BASE_URL}/${USERS}/1`)
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