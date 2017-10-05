import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { provideReduxForms } from '@angular-redux/form';

import { IAppState } from './model'
import { rootReducer, INITIAL_STATE } from './reducers'

@NgModule({
    imports: [NgReduxModule],
    providers: []
})

export class StoreModule {
    constructor(
        ngRedux: NgRedux<IAppState>,
        ngReduxRouter: NgReduxRouter
    ) {
        ngRedux.configureStore(
            rootReducer,
            INITIAL_STATE);
        if (ngReduxRouter) {
            ngReduxRouter.initialize();
        }
        provideReduxForms(ngRedux);
    } 
}
