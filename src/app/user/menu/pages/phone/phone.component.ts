import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessModalComponent } from '../../modals/success-modal/success-modal.component';
import { UserCasesService } from '../../../../../services/user/cases';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.scss'
})
export class PhoneComponent {
  requestCallbackForm: FormGroup;

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private userCasesSvc: UserCasesService
  ) {
    this.requestCallbackForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/), Validators.minLength(10), Validators.maxLength(10)]],
      note: ['']
    });
  }

  submit() {
    console.log("Clicked submit button!");

    this.userCasesSvc.requestSupportByPhone(
      this.requestCallbackForm.value.name,
      this.requestCallbackForm.value.phone,
      this.requestCallbackForm.value.note
    ).then(response => {
      console.log("Success!");
      this.openSuccessModal();
    }).catch(error => {
      console.error("Error!");
    });
  }

  openSuccessModal() {
    const successModalDialogRef = this.dialog.open(SuccessModalComponent, {
      width: 'auto',
      height: 'auto'
    });
    successModalDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
