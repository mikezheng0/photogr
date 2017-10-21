import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

import { NgRedux, select } from '@angular-redux/store'

import { IAppState } from './store/model'
import { LoginModal } from './components/user/login'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private ngRedux: NgRedux<IAppState>, private modalService: NgbModal) {
        
    }

    ngOnInit() {
        
    }
    
}

