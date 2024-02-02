import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EnvelopeComponent } from './components/envelope/envelope.component';
import { WalkingCharacterComponent } from './components/walking-character/walking-character.component';
import { StandingCharacterComponent } from './components/standing-character/standing-character.component';
import { InstructionComponent } from './components/instruction/instruction.component';
import { NgFireworksModule } from '@fireworks-js/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'valentines-game';
}
