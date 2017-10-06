import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store'

import { PhotoModule } from '../photo'
import { AppCommonModule } from '../common'
import { UserModule } from '../user'

import { HomeComponent } from './home/home'
import { ProfileComponent } from './profile/profile'

@NgModule({
    declarations: [
        HomeComponent,
        ProfileComponent
    ],
    imports: [
        NgReduxModule,
        NgbModule,
        PhotoModule,
        AppCommonModule,
        UserModule
    ],
    entryComponents: [

    ],
    exports: [
        HomeComponent,
        ProfileComponent
    ]
})

export class PageModule {
    constructor() {

    }
}
