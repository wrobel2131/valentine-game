import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-thanks-dialog',
  standalone: true,
  imports: [],
  templateUrl: './thanks-dialog.component.html',
  styleUrl: './thanks-dialog.component.scss',
})
export class ThanksDialogComponent {
  constructor(public dialogRef: DialogRef<ThanksDialogComponent>) {}
}
