import { Component, Input} from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { IPhoto } from '../model'


@Component({
    selector: 'photo-list',
    templateUrl: './photo-list.html'
})
export class PhotoListComponent {

    @Input() photos: Observable<IPhoto[]>

    getKey(_, photo: IPhoto) {
        return photo.id;
    }
}
