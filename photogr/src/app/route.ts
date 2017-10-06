import { HomeComponent } from './components/page/home/home'
import { ProfileComponent } from './components/page/profile/profile'

export const appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent }
];
