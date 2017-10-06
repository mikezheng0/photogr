import {Component, Input} from '@angular/core'

@Component({
    selector: 'user-stats',
    templateUrl: './user-stats.html'
})
export class UserStatsComponent{
    @Input() numberOfPhotos : number
    @Input() numberOfFollowers : number
    @Input() numberOfFollowing : number

}