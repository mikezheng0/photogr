import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { provideReduxForms } from '@angular-redux/form';

import { IAppState } from './model'
import { rootReducer } from './reducers'
import { RootEpics } from './epics'

@NgModule({
    imports: [NgReduxModule],
    providers: [RootEpics]
})

export class StoreModule {
    constructor(
        ngRedux: NgRedux<IAppState>,
        devTools: DevToolsExtension,
        ngReduxRouter: NgReduxRouter,
        rootEpics: RootEpics
    ) {
        ngRedux.configureStore(
            rootReducer,
            {}, [...rootEpics.createEpics()],
            devTools.isEnabled() ? [ devTools.enhancer() ] : []);
            
        if (ngReduxRouter) {
            ngReduxRouter.initialize();
        }
        provideReduxForms(ngRedux);
    } 
}
