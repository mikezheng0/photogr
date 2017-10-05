import { Component, OnInit } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

import { LoginModal } from '../../user/login'
import { CreatePhotoModal } from '../../photo/create/create' 

@Component({
    selector: 'core-header',
    templateUrl: './header.html'
})
export class HeaderComponent {
    constructor(private modalService: NgbModal) {

    }

    open() {
        const modalRef = this.modalService.open(LoginModal);
    }

    newPhoto() {
        const modalRef = this.modalService.open(CreatePhotoModal, { size: 'lg' });
    }
}
