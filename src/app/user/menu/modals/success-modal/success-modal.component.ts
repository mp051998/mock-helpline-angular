import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrl: './success-modal.component.scss'
})
export class SuccessModalComponent {
  constructor(
    private dialogRef: MatDialogRef<SuccessModalComponent>,
    private router: Router
  ) { }

  close() {
    console.log('Close button clicked');
    this.router.navigate(['/user/menu/main']);
    this.dialogRef.close();
  }
}
