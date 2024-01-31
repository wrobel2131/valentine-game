import { Component } from '@angular/core';
import { LetterComponent } from '../letter/letter.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-envelope',
  standalone: true,
  imports: [LetterComponent, CommonModule],
  templateUrl: './envelope.component.html',
  styleUrl: './envelope.component.scss',
})
export class EnvelopeComponent {
  isOpen = false;

  openEnvelope() {
    this.isOpen = !this.isOpen;
  }
}
