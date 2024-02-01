import { Component } from '@angular/core';
import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { EnvelopeDialogComponent } from '../envelope-dialog/envelope-dialog.component';

@Component({
  selector: 'app-instruction',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './instruction.component.html',
  styleUrl: './instruction.component.scss',
})
export class InstructionComponent {
  constructor(public dialog: Dialog) {}

  openDialog(): void {
    this.dialog.open<string>(EnvelopeDialogComponent);
  }
}
