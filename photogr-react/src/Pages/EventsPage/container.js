import React, { Component } from "react";
import { connect } from 'react-redux'
import { eventsFetchData } from '../../Core/Event/actions'

export default WrappedComponent => {
  class Container extends Component {
    componentDidMount() {
      this.props.fetchData("https://5a1c09b5c3630f0012b24281.mockapi.io/photogr/events");
    }

    render() {
      if (this.props.hasErrored) {
        return <p>Sorry! There was an error loading the items</p>;
      }

      if (this.props.isLoading) {
          return <p>Loading…</p>;
      }
      
      return <WrappedComponent {...this.props} />;
    }

  }

  const mapStateToProps = (state) => {
    return {
      events: state.events,
      hasErrored: state.eventsHasErrored,
      isLoading: state.eventsIsLoading,
      url: '/event-detail',
      onAdd: () => {}
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchData: (url) => dispatch(eventsFetchData(url))
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container)
};
