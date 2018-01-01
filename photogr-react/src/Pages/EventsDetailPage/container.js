import React, { Component } from "react";
import { connect } from "react-redux";
import { eventFetchData } from "../../Core/Event/actions";
import { BASE_URL, EVENTS } from "../../Configurations";

export default WrappedComponent => {
  class Container extends Component {
    componentDidMount() {
      this.props.fetchData(
        `${BASE_URL}/${EVENTS}/${this.props.match.params.eventId}`
      );
    }

    render() {
      if (this.props.hasErrored)
        return <p>Sorry! There was an error loading the items</p>;

      if (this.props.isLoading) return <p>Loading…</p>;
      
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    event: state.event,
    hasErrored: state.eventsHasErrored,
    isLoading: state.eventsIsLoading
  });

  const mapDispatchToProps = dispatch => ({
    fetchData: url => dispatch(eventFetchData(url))
  });

  return connect(mapStateToProps, mapDispatchToProps)(Container);
};
