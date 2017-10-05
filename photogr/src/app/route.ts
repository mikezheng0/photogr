import { HomeComponent } from './components/page/home/home'

export const appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }
];
