import React, {Component} from 'react'
import {connect} from 'react-redux'
import {photoFetchData} from '../../Core/Photo/PhotoList/actions'
import { BASE_URL, PHOTOS } from "../../Configurations"

export default (WrappedComponent) => {
  class Container extends Component {

    componentWillMount() {
      this.props.fetchData(`${BASE_URL}/${PHOTOS}/${this.props.match.params.photoId}`)
    }

    render() {
      if (this.props.hasErrored) {
        return <p>Sorry! There was an error loading the items</p>;
      }

      if (this.props.isLoading) {
          return <p>Loading…</p>;
      }
      return <WrappedComponent {...this.props}/>
    }
  }

  const mapStateToProps = (state) => {
    return {
      photo: state.photo,
      hasErrored: state.photosHasErrored,
      isLoading: state.photosIsLoading
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchData: (url) => dispatch(photoFetchData(url))
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container)
}
