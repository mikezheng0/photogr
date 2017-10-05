import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { RouterModule } from '@angular/router'
import { NgReduxRouterModule } from '@angular-redux/router'

import { PageModule } from '../page'
import { AppCommonModule } from '../common'

import { LoginModal } from '../user/login'
import { CreatePhotoModal } from '../photo/create/create' 
import { LayoutComponent } from './layout/layout'
import { HeaderComponent } from './header/header'
import { MenuComponent } from './menu/menu'


import { appRoutes } from '../../route'
@NgModule({
    declarations: [
        LoginModal,
        HeaderComponent,
        LayoutComponent,
        MenuComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        NgReduxModule,
        NgReduxRouterModule,
        NgbModule,
        PageModule,
        AppCommonModule
    ],
    entryComponents: [
        LoginModal,
        CreatePhotoModal
    ],
    exports: [
        LayoutComponent
    ]
})

export class CoreModule {
    constructor() {
        
    } 
}
