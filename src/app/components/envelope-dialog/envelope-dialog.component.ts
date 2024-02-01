import { Component } from '@angular/core';
import { EnvelopeComponent } from '../envelope/envelope.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-envelope-dialog',
  standalone: true,
  imports: [EnvelopeComponent],
  templateUrl: './envelope-dialog.component.html',
  styleUrl: './envelope-dialog.component.scss',
})
export class EnvelopeDialogComponent {
  constructor(private dialogRef: DialogRef<EnvelopeDialogComponent>) {}
}
