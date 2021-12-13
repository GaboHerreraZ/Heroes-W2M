import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/component/home.component';

const routes: Routes = [
    {
        path: 'home', 
        component: HomeComponent
    },
    {
        path: 'hero',
        loadChildren: () => import('../app/heroes/heroes.module').then(m => m.HeroesModule)
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }