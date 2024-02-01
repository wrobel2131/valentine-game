import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeDialogComponent } from './envelope-dialog.component';

describe('EnvelopeDialogComponent', () => {
  let component: EnvelopeDialogComponent;
  let fixture: ComponentFixture<EnvelopeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvelopeDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnvelopeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
