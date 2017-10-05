import { NgModule } from '@angular/core'
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store'

import { PhotoModule } from '../photo'
import { PhotoUploaderComponent } from './photo-uploader/photo-uploader'

@NgModule({
    declarations: [
        PhotoUploaderComponent
    ],
    imports: [
        NgReduxModule,
        NgbModule,
    ],
    entryComponents: [
    ],
    exports: [
        PhotoUploaderComponent
    ]
})

export class AppCommonModule {
    constructor() {

    }
}
