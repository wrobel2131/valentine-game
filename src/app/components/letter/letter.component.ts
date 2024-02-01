import { DialogModule, DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { EnvelopeDialogComponent } from '../envelope-dialog/envelope-dialog.component';

@Component({
  selector: 'app-letter',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.scss',
})
export class LetterComponent {
  constructor(private dialogRef: DialogRef<EnvelopeDialogComponent>) {}

  top!: number;
  left!: number;

  moveElement(event: MouseEvent) {
    const parentWidth = 500;
    const parentHeight = 280;
    const childWidth = 46;
    const childHeight = 46;

    this.top = this.getRandomNumber(parentHeight - childHeight);
    this.left = this.getRandomNumber(parentWidth - childWidth);
  }

  sheAgreed() {
    this.dialogRef.close();
  }

  private getRandomNumber = (num: number) => {
    return Math.floor(Math.random() * num);
  };
}
