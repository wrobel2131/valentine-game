import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseNicknamePageComponent } from './choose-nickname-page.component';

describe('ChooseNicknamePageComponent', () => {
  let component: ChooseNicknamePageComponent;
  let fixture: ComponentFixture<ChooseNicknamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseNicknamePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseNicknamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
