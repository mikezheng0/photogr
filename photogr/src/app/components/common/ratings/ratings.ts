import { Component, Input } from '@angular/core'

@Component({
    selector: 'ratings',
    templateUrl: './ratings.html'
})
export class RatingsComponent {
    @Input() rate: number
}