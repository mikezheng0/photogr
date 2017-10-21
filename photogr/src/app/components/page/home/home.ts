import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { select, select$ } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { pipe, values, sortBy, prop } from 'ramda';

import { PhotoAPIActions } from '../../photo/actions'
import { IPhoto } from '../../photo/model'
import { CreatePhotoModal } from '../../photo/create/create'
import { PAGES } from '../constants'

export const convertPhotosToArray = (photoDict$: Observable<{}>) =>
photoDict$.map(
  pipe(
    values,
    sortBy(prop('id'))));

@Component({
    selector: 'page-home',
    templateUrl: './home.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
    featuredPhoto: IPhoto = {
        id: 1,
        title: 'This is a banner',
        description: 'some info',
        url: './assets/images/banner.jpg'
    }
    photoType : string 

    @select$([PAGES.HOME, 'items'], convertPhotosToArray ) readonly photos$: Observable<IPhoto[]>;
    
    constructor(private modalService: NgbModal, actions: PhotoAPIActions) {
        this.photoType = PAGES.HOME
        actions.loadPhotos()
    }
    
}   
