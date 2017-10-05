import { Component, Input, OnInit} from "@angular/core"
import { IPhoto } from '../model'
@Component({
    selector: 'feature-photo',
    templateUrl: './feature-photo.html'
})
export class FeaturePhotoComponent implements OnInit {
    @Input() photo: IPhoto;

    ngOnInit() {
        console.log(this.photo)
    }
}
