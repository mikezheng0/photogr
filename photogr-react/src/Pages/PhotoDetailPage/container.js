import React, {Component} from 'react'

export default (WrappedComponent) =>
  class Container extends Component {
    render() {
      return <WrappedComponent {...this._extract()}/>
    }
    
    _extract(){
      return {
        photo : {
          title: "Sample Title",
          description: "Some description here",
          path:"",
          views: 0,
          favourites: 0,
          author: {
            img: {
              path: ""
            },
            name: "John Smith",
            type: "professional"
          },
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
  }

