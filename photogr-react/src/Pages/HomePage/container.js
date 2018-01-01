import React, {Component} from 'react'
import { connect } from 'react-redux'
import { photosFetchData } from '../../Core/Photo/PhotoList/actions'
import { BASE_URL, PHOTOS } from "../../Configurations"

export default (WrappedComponent) => {
    class Container extends Component {

      componentDidMount () {
        this.props.fetchData(`${BASE_URL}/${PHOTOS}`)
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

    }

    const mapStateToProps = (state) => {
      return {
        photos: state.photos,
        hasErrored: state.photosHasErrored,
        isLoading: state.photosIsLoading,
        url: 'photo-detail'
      }
    }
  
    const mapDispatchToProps = (dispatch) => {
      return {
        fetchData: (url) => dispatch(photosFetchData(url))
      }
    }

    return connect(mapStateToProps, mapDispatchToProps)(Container)
  }

    