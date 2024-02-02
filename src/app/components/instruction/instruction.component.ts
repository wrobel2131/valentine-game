import { Component } from '@angular/core';
import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { EnvelopeDialogComponent } from '../envelope-dialog/envelope-dialog.component';
import { CharacterService } from '../../services/character.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instruction',
  standalone: true,
  imports: [DialogModule, CommonModule],
  templateUrl: './instruction.component.html',
  styleUrl: './instruction.component.scss',
})
export class InstructionComponent {
  constructor(
    public dialog: Dialog,
    public characterService: CharacterService
  ) {}

  openDialog(): void {
    this.dialog.open<string>(EnvelopeDialogComponent);
  }
}
