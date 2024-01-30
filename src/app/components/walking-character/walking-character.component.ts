import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

export enum DirectionsEnum {
  UP = 'ArrowUp',
  DOWN = 'ArrowDown',
  LEFT = 'ArrowLeft',
  RIGHT = 'ArrowRight',
}

// export type Direction = keyof typeof DirectionsEnum;
export type Direction =
  | DirectionsEnum.UP
  | DirectionsEnum.DOWN
  | DirectionsEnum.LEFT
  | DirectionsEnum.RIGHT;

@Component({
  selector: 'app-walking-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './walking-character.component.html',
  styleUrl: './walking-character.component.scss',
})
export class WalkingCharacterComponent {
  @HostListener('document:keydown', ['$event'])
  handleKeyDownEvent(event: KeyboardEvent) {
    if (this.isValidDirection(event.key as Direction)) {
      this.directionClass = this.getDirectionClass(event.key as Direction);
      if (!this.intervalId) {
        this.intervalId = setInterval(() => {
          this.isMoving = true;
          console.log('check');
          this.moveInDirection(event.key as Direction);
        }, this.delayTime);
      }
    }
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyUpEvent(event: KeyboardEvent) {
    if (this.isValidDirection(event.key as Direction)) {
      this.directionClass = this.getDirectionClass(event.key as Direction);
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.isMoving = false;
      }
    }
  }

  private intervalId: any;
  private delayTimerId: any;
  private delayTime: number = 0;
  directionClass: string = 'up';
  isMoving = false;
  characterStyle: { [key: string]: string } = {
    top: '0px',
    left: '0px',
  };

  moveInDirection(keyPressed: Direction): void {
    const step = 1;

    switch (keyPressed) {
      case DirectionsEnum.UP:
        this.characterStyle['top'] = `${
          parseInt(this.characterStyle['top'], 10) - step
        }px`;
        break;
      case DirectionsEnum.DOWN:
        this.characterStyle['top'] = `${
          parseInt(this.characterStyle['top'], 10) + step
        }px`;
        break;
      case DirectionsEnum.LEFT:
        this.characterStyle['left'] = `${
          parseInt(this.characterStyle['left'], 10) - step
        }px`;
        break;
      case DirectionsEnum.RIGHT:
        this.characterStyle['left'] = `${
          parseInt(this.characterStyle['left'], 10) + step
        }px`;
        break;
    }
  }

  isValidDirection(keyPressed: Direction): boolean {
    return Object.values(DirectionsEnum).includes(keyPressed);
  }

  getDirectionClass(direction: Direction) {
    // console.log(direction);
    switch (direction) {
      case DirectionsEnum.UP:
        // console.log(direction);
        return 'up';
      case DirectionsEnum.DOWN:
        // console.log(direction);

        return 'down';
      case DirectionsEnum.LEFT:
        // console.log(direction);

        return 'left';
      case DirectionsEnum.RIGHT:
        // console.log(direction);

        return 'right';
      default:
        return '';
    }
  }
}
