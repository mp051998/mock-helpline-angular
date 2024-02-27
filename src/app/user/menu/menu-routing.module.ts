import { RouterModule, Routes } from '@angular/router';

import { EmailComponent } from './pages/email/email.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { PhoneComponent } from './pages/phone/phone.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'email', component: EmailComponent },
  { path: 'phone', component: PhoneComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
