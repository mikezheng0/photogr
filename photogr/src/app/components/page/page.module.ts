import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store'

import { PhotoModule } from '../photo'
import { AppCommonModule } from '../common'

import { HomeComponent } from '../page/home/home'

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        NgReduxModule,
        NgbModule,
        PhotoModule,
        AppCommonModule
    ],
    entryComponents: [

    ],
    exports: [
        HomeComponent
    ]
})

export class PageModule {
    constructor() {

    }
}
