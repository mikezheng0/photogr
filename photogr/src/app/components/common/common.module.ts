import { NgModule } from '@angular/core'
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store'

import { PhotoModule } from '../photo'
import { PhotoUploaderComponent } from './photo-uploader/photo-uploader'
import { RatingsComponent } from './ratings/ratings'

@NgModule({
    declarations: [
        PhotoUploaderComponent,
        RatingsComponent
    ],
    imports: [
        NgReduxModule,
        NgbModule,
    ],
    exports: [
        PhotoUploaderComponent,
        RatingsComponent
    ]
})

export class AppCommonModule {
    constructor() {

    }
}
