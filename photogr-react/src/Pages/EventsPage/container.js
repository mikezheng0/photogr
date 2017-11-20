import React, {Component} from 'react'

export default (WrappedComponent) => 
  class Container extends Component {
    

    render() {
      return (
        <WrappedComponent {...this._extract()}/>
      )
    }
    
    _extract() {
      return {
        events: this.getEvents(), 
        url: "/event-detail",
        onAdd: this.onAdd
      }
    }

    onAdd(){

    }

    getEvents() {
      return [
        {
          id: 0,
          path: "",
          title: "Hamilton Event",
        } ,{
          id: 1,
          path: "",
          title: "Toronto Event",
        } ,{
          id: 2,
          path: "",
          title: "London Event",
        } ,{
          id: 3,
          path: "",
          title: "Photography Event",
        } 
      ]
    }
  }
