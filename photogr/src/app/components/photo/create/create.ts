import { Component } from '@angular/core'

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'create-photo-modal',
    templateUrl: './create.html'
})
export class CreatePhotoModal {
    constructor(public activeModal: NgbActiveModal) { }

}
