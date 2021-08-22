import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGeneralCardComponent } from './user-general-card.component';

describe('UserGeneralCardComponent', () => {
  let component: UserGeneralCardComponent;
  let fixture: ComponentFixture<UserGeneralCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGeneralCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGeneralCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
