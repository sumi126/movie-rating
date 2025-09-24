import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Movie } from './components/movie/movie';

export const routes: Routes = [
    {path: '', redirectTo: 'login',pathMatch : 'full'},
    {path : 'login',component: Login},
    {path : 'home',component: Home},
    {path : 'movie/:type/:id',component: Movie},
    {path : '**',component: Login},
];
