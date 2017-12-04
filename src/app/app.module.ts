import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProzorciComponent } from './prozorci/prozorci.component';
import { ProzorecDetailComponent } from './prozorci/prozorec-detail/prozorec-detail.component';

import { ProzorecService } from './prozorci/prozorec.service';

import { ProzorciModule } from './prozorci/prozorci.module';
import { LearningCenterModule } from './learning-center/learning-center.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ProzorciModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserAnimationsModule,
    LearningCenterModule,

  ],
  providers: [ProzorecService],
  bootstrap: [AppComponent]
})
export class AppModule { }
