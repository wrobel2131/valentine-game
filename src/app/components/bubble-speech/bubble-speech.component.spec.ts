import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleSpeechComponent } from './bubble-speech.component';

describe('BubbleSpeechComponent', () => {
  let component: BubbleSpeechComponent;
  let fixture: ComponentFixture<BubbleSpeechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BubbleSpeechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BubbleSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
