import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInterestsComponent } from './profile-interests.component';

describe('ProfileInterestsComponent', () => {
  let component: ProfileInterestsComponent;
  let fixture: ComponentFixture<ProfileInterestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInterestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
