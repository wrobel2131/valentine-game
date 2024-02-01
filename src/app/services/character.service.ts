import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import {
  Direction,
  DirectionsEnum,
  DirectionClass,
  DirectionsClassEnum,
} from '../models/directions';
import { CharacterPosition, NumberInPx } from '../models/position';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private directionClassSubject: BehaviorSubject<DirectionClass> =
    new BehaviorSubject<DirectionClass>(DirectionsClassEnum.DOWN);
  public readonly directionClass$: Observable<DirectionClass> =
    this.directionClassSubject.asObservable();

  private isMovingSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public readonly isMoving$: Observable<boolean> =
    this.isMovingSubject.asObservable();

  private characterPositionSubject: BehaviorSubject<CharacterPosition> =
    new BehaviorSubject<CharacterPosition>({ top: '600px', left: '670px' });
  public readonly characterPosition$: Observable<CharacterPosition> =
    this.characterPositionSubject.asObservable();

  public isInteractiveSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly isInteractive$: Observable<boolean> = this.isInteractiveSubject.asObservable();

  private STEP_PX = 1;

  moveCharacter(direction: Direction): void {
    const stepPx = this.STEP_PX;
    switch (direction) {
      case DirectionsEnum.UP:
        this.moveCharacterUp(stepPx);
        break;
      case DirectionsEnum.DOWN:
        this.moveCharacterDown(stepPx);
        break;
      case DirectionsEnum.LEFT:
        this.moveCharacterLeft(stepPx);
        break;
      case DirectionsEnum.RIGHT:
        this.moveCharacterRight(stepPx);
        break;
    }
  }

  setIsInteractive(isInteractive: boolean) {
    this.isInteractiveSubject.next(isInteractive);
  }

  setDirection(direction: Direction): void {
    switch (direction) {
      case DirectionsEnum.UP:
        this.setDirectionClass(DirectionsClassEnum.UP);
        break;
      case DirectionsEnum.DOWN:
        this.setDirectionClass(DirectionsClassEnum.DOWN);
        break;
      case DirectionsEnum.LEFT:
        this.setDirectionClass(DirectionsClassEnum.LEFT);
        break;
      case DirectionsEnum.RIGHT:
        this.setDirectionClass(DirectionsClassEnum.RIGHT);
        break;
    }
  }

  setIsMoving(isMoving: boolean): void {
    this.isMovingSubject.next(isMoving);
  }

  isKeyboardKeyAsDirectionValid(key: Direction): boolean {
    return Object.entries(DirectionsEnum)
      .map((arr) => arr[1])
      .includes(key);
  }

  calculateDistanceBetweenCharacters(
    firstCharacterPosition: CharacterPosition,
    secondCharacterPosition: CharacterPosition
  ): number {
    return Math.sqrt(
      Math.pow(
        this.parseToNumber(firstCharacterPosition.left) -
          this.parseToNumber(secondCharacterPosition.left),
        2
      ) +
        Math.pow(
          this.parseToNumber(firstCharacterPosition.top) -
            this.parseToNumber(secondCharacterPosition.top),
          2
        )
    );
  }

  private parseToNumber(positionPx: NumberInPx): number {
    return parseInt(positionPx, 10);
  }

  private moveCharacterUp(step: number): void {
    this.characterPosition$.pipe(take(1)).subscribe({
      next: (currentPosition) => {
        this.setCharacterPosition({
          ...currentPosition,
          top: `${this.parseToNumber(currentPosition.top) - step}px`,
        });
      },
    });
  }

  private moveCharacterDown(step: number): void {
    this.characterPosition$.pipe(take(1)).subscribe({
      next: (currentPosition) => {
        this.setCharacterPosition({
          ...currentPosition,
          top: `${this.parseToNumber(currentPosition.top) + step}px`,
        });
      },
    });
  }

  private moveCharacterLeft(step: number): void {
    this.characterPosition$.pipe(take(1)).subscribe({
      next: (currentPosition) => {
        this.setCharacterPosition({
          ...currentPosition,
          left: `${this.parseToNumber(currentPosition.left) - step}px`,
        });
      },
    });
  }

  private moveCharacterRight(step: number): void {
    this.characterPosition$.pipe(take(1)).subscribe({
      next: (currentPosition) => {
        this.setCharacterPosition({
          ...currentPosition,
          left: `${this.parseToNumber(currentPosition.left) + step}px`,
        });
      },
    });
  }

  private setCharacterPosition(position: CharacterPosition): void {
    this.characterPositionSubject.next(position);
  }

  private setDirectionClass(direction: DirectionClass): void {
    this.directionClassSubject.next(direction);
  }
}
