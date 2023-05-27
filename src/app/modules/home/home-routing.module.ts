import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PagesComponent } from './pages.component';
import { LoginComponent } from '../auth/components/login/login.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'servicio', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
