import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainSceneComponent } from './mountain-scene.component';

describe('MountainSceneComponent', () => {
  let component: MountainSceneComponent;
  let fixture: ComponentFixture<MountainSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MountainSceneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MountainSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
