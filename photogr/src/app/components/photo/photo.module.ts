import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store'

import { AppCommonModule } from '../common'

import { FeaturePhotoComponent } from './feature-photo/feature-photo'
import { PhotoListComponent } from './photo-list/photo-list'
import { PhotoItemComponent } from './photo-item/photo-item'
import { CreatePhotoModal } from './create/create'


@NgModule({
    declarations: [
        FeaturePhotoComponent,
        PhotoListComponent,
        PhotoItemComponent,
        CreatePhotoModal
    ],
    imports: [
        NgReduxModule,
        NgbModule,
        CommonModule,
        AppCommonModule
    ],
    entryComponents: [
        CreatePhotoModal
    ],
    exports: [
        PhotoItemComponent,
        FeaturePhotoComponent,
        PhotoListComponent,
        CreatePhotoModal
    ]
})

export class PhotoModule {
    constructor() {

    }
}
