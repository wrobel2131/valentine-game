import { CommonModule } from '@angular/common';
import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import {
  Direction,
  DirectionClass,
  DirectionsEnum,
} from '../../models/directions';
import { Subscription } from 'rxjs';
import { CharacterPosition } from '../../models/position';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-walking-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './walking-character.component.html',
  styleUrl: './walking-character.component.scss',
})
export class WalkingCharacterComponent implements OnInit {
  directionClassValue!: DirectionClass;
  directionClassSubscription!: Subscription;

  isMovingValue!: boolean;
  isMovingSubscription!: Subscription;

  characterPositionValue!: CharacterPosition;
  characterPositionSubscription!: Subscription;

  private intervalId: any;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.directionClassSubscription =
      this.characterService.directionClass$.subscribe(
        (directionClass) => (this.directionClassValue = directionClass)
      );
    this.isMovingSubscription = this.characterService.isMoving$.subscribe(
      (isMoving) => (this.isMovingValue = isMoving)
    );
    this.characterPositionSubscription =
      this.characterService.characterPosition$.subscribe(
        (characterPosition) => (this.characterPositionValue = characterPosition)
      );
  }

  @HostBinding('class') get hostClasses() {
    return `${this.directionClassValue} ${this.isMovingValue ? 'moving' : 'not-moving'}`;
  }

  @HostBinding('style') get hostStyles() {
    return this.characterPositionValue;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyDownEvent(event: KeyboardEvent) {
    const keyboardKey = event.key;

    if (this.isKeyboardKeyValid(keyboardKey)) {
      if (!this.intervalId) {
        this.intervalId = setInterval(() => {
          this.setDirectionFromKeyboardKey(keyboardKey);
          this.setIsMoving(true);
          this.move(keyboardKey);
        }, 0);
      }
    }
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyUpEvent(event: KeyboardEvent) {
    const keyboardKey = event.key;

    if (this.isKeyboardKeyValid(keyboardKey)) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.setDirectionFromKeyboardKey(keyboardKey);
      this.setIsMoving(false);
    }
  }

  move(key: string): void {
    this.characterService.moveCharacter(key as Direction);
  }

  isKeyboardKeyValid(key: string): boolean {
    return this.characterService.isKeyboardKeyAsDirectionValid(
      key as Direction
    );
  }

  setIsMoving(isMoving: boolean) {
    this.characterService.setIsMoving(isMoving);
  }

  setDirectionFromKeyboardKey(key: string): void {
    this.characterService.setDirection(key as Direction);
  }
}
