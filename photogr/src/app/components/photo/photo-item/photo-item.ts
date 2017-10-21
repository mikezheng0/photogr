import { Component, Input} from "@angular/core"
import { select, WithSubStore } from '@angular-redux/store'
import { Observable } from 'rxjs/Observable'
import { Reducer, Action } from 'redux'
import { PhotoAPIAction } from '../actions'

//import { photoReducer } from '../reducer';
import { IPhoto } from '../model'



// Basic reducer logic.
export const photoReducer: Reducer<any> = (state: any = {}, action: PhotoAPIAction) => 
    action.type === 'ADD_LOC' ?
    { ...state, loc: state.loc + action.payload } :
    state;

@WithSubStore({
    basePathMethodName: 'getBasePath',
    localReducer: photoReducer
})
@Component({
    selector: 'photo-item',
    templateUrl: './photo-item.html'
})
export class PhotoItemComponent {
    @select('url') readonly url$: Observable<string>

    @Input() key: string
    @Input() photoType: string

    getBasePath = () => this.key ? [ this.photoType, 'items', this.key ] : null
}
