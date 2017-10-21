import { Component, Input, ChangeDetectionStrategy} from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { IPhoto } from '../model'


@Component({
    selector: 'photo-list',
    templateUrl: './photo-list.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoListComponent {

    @Input() photos: Observable<IPhoto[]>
    @Input() photoType: string

    getKey(_, photo: IPhoto) {
        return photo.id;
    }
}
