import {NgModule} from '@angular/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import {UserSubscriptionComponent} from './user-subscription/user-subscription'
import {UserTypeComponent} from './user-type/user-type'
import {UserStatsComponent} from './user-stats/user-stats'
import {ContactInformationComponent} from './contact-information/contact-information'

@NgModule({
    declarations: [
        UserSubscriptionComponent,
        UserTypeComponent,
        UserStatsComponent,
        ContactInformationComponent
    ],
    imports: [
        NgbModule
    ],
    exports: [
        UserSubscriptionComponent,
        UserTypeComponent,
        UserStatsComponent,
        ContactInformationComponent
    ]
})
export class UserModule {

}