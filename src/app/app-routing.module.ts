import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProzorciComponent } from './prozorci/prozorci.component';
const routes: Routes = [
  { path: '', redirectTo: '/prozorci', pathMatch: 'full' },
  { path: 'prozorci', component: ProzorciComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
