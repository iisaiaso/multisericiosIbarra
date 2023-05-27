import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { PagesComponent } from './modules/home/pages.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const AuthRouting = () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
const HomeRouting = () => import('./modules/home/home.module').then((m) => m.HomeModule)
const DashboardRouting = () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)

const routes: Routes = [
  { path: 'auth', loadChildren: AuthRouting },
  {
    path: '', component: PagesComponent,
    children: [
      { path: '', loadChildren: HomeRouting }
    ]
  }, //Es la parte pricipal
  // { path: 'login', component: LoginComponent },//Es la parte pricipal
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', loadChildren: DashboardRouting }
    ]
  } //Es la parte pricipal

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
