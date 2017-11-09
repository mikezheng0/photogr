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
                mockImages: this.getMockData(),
                url: '/photo-detail',
                onClick: this.printId
            }
        }

        printId(id) {
            console.log(id)
        }

        getMockData() {
            return [
                {
                    path:"",
                    id: 1
                },{
                    path:"",
                    id: 2
                }
            ]
        }
        
    }

    