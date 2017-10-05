import { Component, Input} from "@angular/core"
import { IPhoto } from '../model'

@Component({
    selector: 'photo-item',
    templateUrl: './photo-item.html'
})
export class PhotoItemComponent {
    @Input() photo: IPhoto
    @Input() key: number

}
