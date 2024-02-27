import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessModalComponent } from '../../modals/success-modal/success-modal.component';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss'
})
export class EmailComponent {
  requestEmailSupportForm: FormGroup;

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {
    this.requestEmailSupportForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
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
