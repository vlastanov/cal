import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProzorciComponent } from './prozorci/prozorci.component';
import { LearningCenterComponent } from './learning-center/learning-center.component';
import { ChildComponent } from './learning-center/child/child.component';

const routes: Routes = [
  { path: '', redirectTo: '/prozorci', pathMatch: 'full' },
  { path: 'prozorci', component: ProzorciComponent },
  { path: 'learningCenter', component: LearningCenterComponent },
  { path: 'child', component: ChildComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
