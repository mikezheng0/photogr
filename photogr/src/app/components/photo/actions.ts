import {Injectable} from '@angular/core'
import {dispatch} from '@angular-redux/store'
import {FluxStandardAction} from 'flux-standard-action'

import {IPhoto} from './model'

type Payload = IPhoto[]
interface MetaData {};

export type PhotoAPIAction = FluxStandardAction<Payload,MetaData>


@Injectable()
export class PhotoAPIActions {
    static readonly LOAD_PHOTOS = 'LOAD_PHOTOS'
    static readonly LOAD_STARTED = 'LOAD_STARTED'
    static readonly LOAD_SUCCEEDED = 'LOAD_SUCCEEDED'
    static readonly LOAD_FAILED = 'LOAD_FAILED'

    @dispatch()
    loadPhotos = (): PhotoAPIAction => ({
        type: PhotoAPIActions.LOAD_PHOTOS,  
        meta: {},
        payload: null
    })

    @dispatch()
    loadStarted = (): PhotoAPIAction => ({
        type: PhotoAPIActions.LOAD_STARTED,
        meta: {  },
        payload: null,
      })
    
    @dispatch()
    loadSucceeded = (payload: Payload): PhotoAPIAction => ({
      type: PhotoAPIActions.LOAD_SUCCEEDED,
      meta: { },
      payload,
    })

    @dispatch()
    loadFailed = (error): PhotoAPIAction => ({
      type: PhotoAPIActions.LOAD_FAILED,
      meta: { },
      payload: null,
      error,
    })
}