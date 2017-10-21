import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { select, select$ } from '@angular-redux/store'
import { Observable } from 'rxjs'
import { pipe, values, sortBy, prop } from 'ramda';

import { PAGES } from '../constants'
import { IPhoto } from '../../photo/model'
import { PhotoAPIActions } from '../../photo/actions'


export const convertPhotosToArray = (photoDict$: Observable<{}>) =>
photoDict$.map(
  pipe(
    values,
    sortBy(prop('id'))));

@Component({
    selector:'page-profile',
    templateUrl: 'profile.html',
    changeDetection: ChangeDetectionStrategy.OnPush
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

    photoType: string
    @select$([PAGES.HOME, 'items'], convertPhotosToArray) readonly photos$ : Observable<IPhoto[]>

    constructor(action: PhotoAPIActions) {
        this.photoType = PAGES.HOME
        //action.loadPhotos()
    }

}