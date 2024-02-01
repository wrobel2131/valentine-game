import { Component } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { EnvelopeComponent } from '../envelope/envelope.component';

@Component({
  selector: 'app-envelope-dialog',
  standalone: true,
  imports: [EnvelopeComponent],
  templateUrl: './envelope-dialog.component.html',
  styleUrl: './envelope-dialog.component.scss',
})
export class EnvelopeDialogComponent {
  constructor(public dialogRef: DialogRef<EnvelopeDialogComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
