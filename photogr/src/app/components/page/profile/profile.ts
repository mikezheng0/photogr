import { Component } from '@angular/core'

@Component({
    selector:'page-profile',
    templateUrl: 'profile.html'
})
export class ProfileComponent{
    user = {
        firstname: "John",
        lastname: "Smith",
        type:"Professional",
        rating: 4,
        photos: 10,
        followers: 12,
        following: 10
    }
}