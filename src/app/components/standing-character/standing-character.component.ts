import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { CommonModule } from '@angular/common';
import { CharacterPosition, NumberInPx } from '../../models/position';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-standing-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standing-character.component.html',
  styleUrl: './standing-character.component.scss',
})
export class StandingCharacterComponent implements OnInit {
  @Input() initPosition: CharacterPosition = {
    top: '120px',
    left: '1320px',
  };

  @HostBinding('style') get hostStyles() {
    return this.initPosition;
  }

  distance!: number;

  secondCharacterPositionValue!: CharacterPosition;
  secondCharacterPositionSubscription!: Subscription;

  constructor(public characterService: CharacterService) {}

  ngOnInit(): void {
    this.secondCharacterPositionSubscription =
      this.characterService.characterPosition$.subscribe(
        (secondCharacterPosition) => {
          this.secondCharacterPositionValue = secondCharacterPosition;
          this.distance = this.calculateDistance(secondCharacterPosition);
        }
      );
  }

  calculateDistance(secondCharacterPosition: CharacterPosition): number {
    return this.characterService.calculateDistanceBetweenCharacters(
      this.initPosition,
      secondCharacterPosition
    );
  }
}
