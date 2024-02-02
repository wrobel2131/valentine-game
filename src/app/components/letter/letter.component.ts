import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { Component, Renderer2 } from '@angular/core';
import { EnvelopeDialogComponent } from '../envelope-dialog/envelope-dialog.component';
import { Fireworks } from 'fireworks-js';
import { NgFireworksModule } from '@fireworks-js/angular';
import { ThanksDialogComponent } from '../thanks-dialog/thanks-dialog.component';
@Component({
  selector: 'app-letter',
  standalone: true,
  imports: [DialogModule, NgFireworksModule],
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.scss',
})
export class LetterComponent {
  constructor(
    private dialogRef: DialogRef<EnvelopeDialogComponent>,
    private renderer: Renderer2,
    private dialog: Dialog
  ) {}

  top!: number;
  left!: number;

  moveElement(event: MouseEvent) {
    const parentWidth = 500;
    const parentHeight = 280;
    const childWidth = 46;
    const childHeight = 46;

    this.top = this.getRandomNumber(parentHeight - childHeight);
    this.left = this.getRandomNumber(parentWidth - childWidth);
  }

  sheAgreed() {
    this.dialogRef.close();
    const container = this.renderer.selectRootElement('.fireworks');
    const fireworks = new Fireworks(container, {
      autoresize: false,
      opacity: 0.5,
      acceleration: 1.05,
      friction: 0.97,
      gravity: 1.5,
      particles: 100,
      traceLength: 3,
      traceSpeed: 14,
      explosion: 8,
      intensity: 40,
      flickering: 50,
      lineStyle: 'round',
      hue: {
        min: 0,
        max: 360,
      },
      delay: {
        min: 30,
        max: 60,
      },
      rocketsPoint: {
        min: 50,
        max: 50,
      },
      lineWidth: {
        explosion: {
          min: 1,
          max: 3,
        },
        trace: {
          min: 1,
          max: 2,
        },
      },
      brightness: {
        min: 86,
        max: 100,
      },
      decay: {
        min: 0.015,
        max: 0.03,
      },
      mouse: {
        click: false,
        move: false,
        max: 1,
      },
    });

    fireworks.start();
    setTimeout(() => {
      fireworks.stop();
    }, 20000);
    this.dialog.open(ThanksDialogComponent, {
      autoFocus: 'first-header',
    });
  }

  private getRandomNumber = (num: number) => {
    return Math.floor(Math.random() * num);
  };
}
