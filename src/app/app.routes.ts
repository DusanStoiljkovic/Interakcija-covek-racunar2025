import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { Details } from './components/details/details';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'about', component: About},
    {path: 'login', component: Login},
    {path: 'signup', component: Signup},
    {path: 'details/:id', component: Details},
    {path: '**', redirectTo: ''}
];
