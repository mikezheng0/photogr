import { Component, Input } from '@angular/core';

import {  NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'login-modal',
    templateUrl: './login.html'
})
export class LoginModal {

    constructor(public activeModal: NgbActiveModal) { }
}
