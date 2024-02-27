import { CommonModule, NgIf } from '@angular/common';

import { MainComponent } from './main/main.component';
import { MenuRoutingModule } from './menu-routing.module';
import { NgModule } from '@angular/core';
import { PhoneComponent } from './pages/phone/phone.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccessModalComponent } from './modals/success-modal/success-modal.component';
import { UserMenuMaterialModule } from './menu-material.module';

@NgModule({
  declarations: [
    // Components
    MainComponent,
    PhoneComponent,
    // Modals
    SuccessModalComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    UserMenuMaterialModule,
    ReactiveFormsModule
  ]
})
export class MenuModule { }
