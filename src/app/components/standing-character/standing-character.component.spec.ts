import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingCharacterComponent } from './standing-character.component';

describe('StandingCharacterComponent', () => {
  let component: StandingCharacterComponent;
  let fixture: ComponentFixture<StandingCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandingCharacterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandingCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
