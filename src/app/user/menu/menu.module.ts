import { CommonModule, NgIf } from '@angular/common';

import { EmailComponent } from './pages/email/email.component';
import { FaqComponent } from './pages/faq/faq.component';
import { MainComponent } from './main/main.component';
import { MenuRoutingModule } from './menu-routing.module';
import { NgModule } from '@angular/core';
import { PhoneComponent } from './pages/phone/phone.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccessModalComponent } from './modals/success-modal/success-modal.component';
import { UserCasesService } from '../../../services/user/cases';
import { UserMenuMaterialModule } from './menu-material.module';

@NgModule({
  declarations: [
    // Components
    MainComponent,
    EmailComponent,
    FaqComponent,
    PhoneComponent,
    // Modals
    SuccessModalComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    UserMenuMaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    UserCasesService
  ]
})
export class MenuModule { }
