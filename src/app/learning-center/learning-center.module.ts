import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningCenterComponent } from './learning-center.component';
import { ChildComponent } from './child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [
    ChildComponent,
    LearningCenterComponent,

  ]
})
export class LearningCenterModule { }
