import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAv86V-vQKW3VPNu2klYV_UP_afH7EY1kQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
