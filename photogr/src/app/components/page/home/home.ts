import { Component, OnInit, Input } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

import { IPhoto } from '../../photo/model'
import { CreatePhotoModal } from '../../photo/create/create'

@Component({
    selector: 'page-home',
    templateUrl: './home.html'
})
export class HomeComponent {
    featuredPhoto: IPhoto = {
        id: 1,
        title: 'This is a banner',
        description: 'some info',
        file: './assets/images/banner.jpg'
    }
    constructor(private modalService: NgbModal) {
    }
    
}
