import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';

@Component({
  selector: 'app-change-nickname-dialog',
  standalone: true,
  imports: [],
  templateUrl: './change-nickname-dialog.component.html',
  styleUrl: './change-nickname-dialog.component.scss',
})
export class ChangeNicknameDialogComponent {
  constructor(
    @Inject(DIALOG_DATA) public data: { character: number },
    private dialogRef: DialogRef<ChangeNicknameDialogComponent>
  ) {}
}
