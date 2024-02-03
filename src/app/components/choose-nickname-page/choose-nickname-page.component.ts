import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { ChangeNicknameDialogComponent } from '../change-nickname-dialog/change-nickname-dialog.component';
import { CharacterService } from '../../services/character.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-choose-nickname-page',
  standalone: true,
  imports: [DialogModule, CommonModule, RouterModule],
  templateUrl: './choose-nickname-page.component.html',
  styleUrl: './choose-nickname-page.component.scss',
})
export class ChooseNicknamePageComponent {
  constructor(
    private dialog: Dialog,
    public characterService: CharacterService
  ) {}

  setFirstCharacterNickname() {
    this.dialog.open(ChangeNicknameDialogComponent, {
      data: {
        character: 1,
      },
    });
  }

  setSecondCharacterNickname() {
    this.dialog.open(ChangeNicknameDialogComponent, {
      data: {
        character: 2,
      },
    });
  }
}
