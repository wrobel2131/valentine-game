import { DialogRef } from '@angular/cdk/dialog';
import { Component, HostListener, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { CharacterService } from '../../services/character.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-change-nickname-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './change-nickname-dialog.component.html',
  styleUrl: './change-nickname-dialog.component.scss',
})
export class ChangeNicknameDialogComponent {
  constructor(
    @Inject(DIALOG_DATA) public data: { character: number },
    private dialogRef: DialogRef<ChangeNicknameDialogComponent>,
    private characterService: CharacterService
  ) {}

  name: string = '';

  @HostListener('window:keydown.Enter', ['$event'])
  onDialogClick(): void {
    this.saveCharacterName();
  }

  saveCharacterName() {
    switch (this.data.character) {
      case 1:
        this.characterService.setFirstCharacterName(this.name);
        break;
      case 2:
        this.characterService.setSecondCharacterName(this.name);
        break;
    }
    this.dialogRef.close();
  }
}
