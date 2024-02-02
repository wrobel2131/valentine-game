import { DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-thanks-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thanks-dialog.component.html',
  styleUrl: './thanks-dialog.component.scss',
})
export class ThanksDialogComponent {
  constructor(
    public dialogRef: DialogRef<ThanksDialogComponent>,
    public characterService: CharacterService
  ) {}
}
