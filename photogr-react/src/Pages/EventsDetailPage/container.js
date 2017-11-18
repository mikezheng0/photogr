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
        title: "Hamilton Event",
        description: "This events is for photographers in the Hamilton area",
        location: {
          streetAddress: "123 fake st",
          postalCode: "1l1l1l",
          city: "Hamilton",
          state: "Ontario",
          country: "Canada"
        }, 
        created: new Date(),
        eventDate: new Date(),
        photos: [
          {
            path:"",
            id: 1
          },{
            path:"",
            id: 2
          }
        ],
        comments: [
          {
              id: 1,
              created: new Date(),
              score: 5,
              author: {
                  img: {
                      path: ""
                  },
                  name: "Bob Smith",
                  type: "professional"
              },
              comment: "i hate life",
              replies: []
          }
        ]
      }
    }
  }