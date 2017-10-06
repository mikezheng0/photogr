import {Component, Input} from '@angular/core'

@Component({
    selector: 'user-type',
    templateUrl: './user-type.html'
})
export class UserTypeComponent{
    @Input() userType : string
}