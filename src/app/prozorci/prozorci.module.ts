import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProzorciComponent } from './prozorci.component';
import { ProzorecDetailComponent } from './prozorec-detail/prozorec-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProzorciComponent,
    ProzorecDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  exports: [FormsModule, ReactiveFormsModule]
})
export class ProzorciModule { }
