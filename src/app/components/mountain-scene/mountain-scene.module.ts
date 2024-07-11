import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MountainSceneComponent } from './mountain-scene.component';



@NgModule({
  declarations: [MountainSceneComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MountainSceneComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class MountainSceneModule { }
