import { Component } from '@angular/core';
import { InstructionComponent } from '../instruction/instruction.component';
import { StandingCharacterComponent } from '../standing-character/standing-character.component';
import { WalkingCharacterComponent } from '../walking-character/walking-character.component';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [
    WalkingCharacterComponent,
    StandingCharacterComponent,
    InstructionComponent,
  ],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss',
})
export class PlaygroundComponent {}
