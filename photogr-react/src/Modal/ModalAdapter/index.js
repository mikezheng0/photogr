import React, { Component } from 'react';

export default WrappedComponent =>
  class withModal extends Component {
    constructor(props) {
      super(props);
      this.state = { isOpen: false };

      this.openModal = this.openModal.bind(this);
      this.handleOverlayClick = this.handleOverlayClick.bind(this);
      this.handleBodyClick = this.handleBodyClick.bind(this);
    }

    openModal() {
      this.setState({
        isOpen: true
      });
    }

    componentWillMount() {
      this.shouldClose = true;
    }

    handleOverlayClick() {
      if (!this.shouldClose) {
        this.shouldClose = true;
        return;
      } else
        this.setState({
          isOpen: false
        });
    }

    handleBodyClick() {
      this.shouldClose = false;
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          state={this.state}
          openModal={this.openModal}
          handleOverlayClick={this.handleOverlayClick}
          handleBodyClick={this.handleBodyClick}
        />
      );
    }
  };
