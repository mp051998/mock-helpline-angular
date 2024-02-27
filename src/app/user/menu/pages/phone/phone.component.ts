import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessModalComponent } from '../../modals/success-modal/success-modal.component';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.scss'
})
export class PhoneComponent {
  requestCallbackForm: FormGroup;

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {
    this.requestCallbackForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/), Validators.minLength(10), Validators.maxLength(10)]],
      note: ['']
    });
  }

  submit() {
    console.log("Clicked submit button!");
    // TODO: Implement this logic

    // Show success modal
    const successModalDialogRef = this.dialog.open(SuccessModalComponent, {
      width: 'auto',
      height: 'auto'
    });
    successModalDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
