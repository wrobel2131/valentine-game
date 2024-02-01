import { Component } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { EnvelopeComponent } from '../envelope/envelope.component';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
@Component({
  selector: 'app-envelope-dialog',
  standalone: true,
  imports: [EnvelopeComponent],
  templateUrl: './envelope-dialog.component.html',
  styleUrl: './envelope-dialog.component.scss',
})
export class EnvelopeDialogComponent {
  constructor(public dialogRef: MatDialogRef<EnvelopeDialogComponent>) {}

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
}
