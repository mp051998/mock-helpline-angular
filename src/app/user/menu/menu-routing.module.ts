import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { PhoneComponent } from './pages/phone/phone.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'phone', component: PhoneComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
