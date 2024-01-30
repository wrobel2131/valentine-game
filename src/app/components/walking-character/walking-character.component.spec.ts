import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkingCharacterComponent } from './walking-character.component';

describe('WalkingCharacterComponent', () => {
  let component: WalkingCharacterComponent;
  let fixture: ComponentFixture<WalkingCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalkingCharacterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WalkingCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
