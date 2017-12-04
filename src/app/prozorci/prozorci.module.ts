import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProzorciComponent } from './prozorci.component';
import { ProzorecDetailComponent } from './prozorec-detail/prozorec-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablicaComponent } from './tablica/tablica.component';


@NgModule({
  declarations: [
    ProzorciComponent,
    ProzorecDetailComponent,
    TablicaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  exports: [FormsModule, ReactiveFormsModule]
})
export class ProzorciModule { }
