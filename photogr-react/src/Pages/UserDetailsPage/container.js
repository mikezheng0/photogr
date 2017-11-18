import React, {Component} from 'react'

export default (WrappedComponent) => 
    class Container extends Component {
        render() {
            return (
                <WrappedComponent {...this._extract()}>

                </WrappedComponent>
            )
        }
        _extract(){
            return {
                user: {
                    name: "John Smith",
                    photos: this.getMockData(),
                    followers: 10,
                    following: 50,
                    rating: 4.5,
                    profilePhoto: "",
                    contactInformation: {
                        streetAddress: "123 fake st",
                        postalCode: "1l1l1l",
                        city: "Hamilton",
                        state: "Ontario",
                        country: "Canada"
                    }
                },
                url: '/photo-detail',
                onClickPhoto: this.onClickPhoto
            }
        }

        onClickPhoto() {

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