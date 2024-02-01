import { CommonModule } from '@angular/common';
import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import {
  Direction,
  DirectionClass,
} from '../../models/directions';
import { Subscription } from 'rxjs';
import { CharacterPosition } from '../../models/position';
import { CharacterService } from '../../services/character.service';
import { BubbleSpeechComponent } from '../bubble-speech/bubble-speech.component';
import { EnvelopeDialogComponent } from '../envelope-dialog/envelope-dialog.component';
import { Dialog, DialogModule } from '@angular/cdk/dialog';

@Component({
  selector: 'app-walking-character',
  standalone: true,
  imports: [CommonModule, BubbleSpeechComponent, DialogModule],
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

  isInteractiveValue!: boolean;
  isInteractiveSubscription!: Subscription;

  private intervalId: any;

  constructor(public characterService: CharacterService, public dialog: Dialog) {}

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

      this.isInteractiveSubscription = this.characterService.isInteractive$.subscribe(isInteractive => this.isInteractiveValue = isInteractive);
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
    if(keyboardKey === 'e' && this.isInteractiveValue) {
      this.openEnvelopeDialog();
      this.characterService.setIsInteractive(false);
    }

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

  openEnvelopeDialog(): void {
    this.dialog.open<string>(EnvelopeDialogComponent);
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
