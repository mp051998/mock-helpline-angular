import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
  // { path: 'landing-page', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) },
  // { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
