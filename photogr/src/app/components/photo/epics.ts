import { Injectable } from '@angular/core';
import { Epic, createEpicMiddleware } from 'redux-observable'
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';

import {PhotoAPIAction,PhotoAPIActions} from './actions'
import {IAppState} from '../../store/model'
import {PhotoAPIService} from './service'

@Injectable()
export class PhotoAPIEpics {
    constructor(
        private actions: PhotoAPIActions,
        private service: PhotoAPIService
    ) {}

    public createEpic() {
        return createEpicMiddleware(this.createLoadPhotoEpic());
    }
    
    private createLoadPhotoEpic(): Epic<PhotoAPIAction, IAppState> {
    return (action$, store) => action$
        .ofType(PhotoAPIActions.LOAD_PHOTOS)
        .switchMap(() => this.service.getAll()
            .map(data => this.actions.loadSucceeded(data))
            .catch(response => of(this.actions.loadFailed({
                status: '' + response.status,
            })))
            .startWith(this.actions.loadStarted())
        );
    }
    
}