import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { ChangeNicknameDialogComponent } from '../change-nickname-dialog/change-nickname-dialog.component';

@Component({
  selector: 'app-choose-nickname-page',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './choose-nickname-page.component.html',
  styleUrl: './choose-nickname-page.component.scss',
})
export class ChooseNicknamePageComponent {
  constructor(private dialog: Dialog) {}

  setFirstCharacterNickname() {
    console.log('set nickname');
    this.dialog.open(ChangeNicknameDialogComponent, {
      data: {
        character: 1,
      },
    });
  }

  setSecondCharacterNickname() {
    console.log('set nickname');
    this.dialog.open(ChangeNicknameDialogComponent, {
      data: {
        character: 2,
      },
    });
  }
}
