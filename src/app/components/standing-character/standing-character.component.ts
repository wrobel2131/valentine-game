import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { CommonModule } from '@angular/common';
import { CharacterPosition, NumberInPx } from '../../models/position';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-standing-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standing-character.component.html',
  styleUrl: './standing-character.component.scss'
})
export class StandingCharacterComponent implements OnInit {
  @Input() initPosition: CharacterPosition = {
    top: "520px",
    left: "1400px"
  }

  distance!: number;

  secondCharacterPositionValue!: CharacterPosition;
  secondCharacterPositionSubscription!: Subscription;

  constructor(public characterService: CharacterService) {

  }

  ngOnInit(): void {
    this.secondCharacterPositionSubscription =
      this.characterService.characterPosition$.subscribe(
        (secondCharacterPosition) => {
          this.secondCharacterPositionValue = secondCharacterPosition;
          this.distance = this.calculateDistance(secondCharacterPosition)
        }
      );
  }

  parsePxToNumber(positionPx: NumberInPx) {
    return this.characterService.parseToNumber(positionPx);
  }

  action() {
    console.log("Close")
  }

  calculateDistance(secondCharacterPosition: CharacterPosition): number {
    // Przykładowa logika obliczania odległości (możesz dostosować do swoich potrzeb)/* Logika uzyskiwania aktualnej pozycji */
    return Math.sqrt(Math.pow((this.parsePxToNumber(this.initPosition.left) - this.parsePxToNumber(secondCharacterPosition.left)),2) + Math.pow((this.parsePxToNumber(this.initPosition.top) - this.parsePxToNumber(secondCharacterPosition.top)),2))
    // return Math.sqrt(
      // Math.pow(this.parsePxToNumber(this.initPosition.top) - this.parsePxToNumber(secondCharacterPosition.top), 2) + Math.pow(this.parsePxToNumber(this.initPosition.left) - this.parsePxToNumber(secondCharacterPosition.left), 2)
    // );
  }

}
