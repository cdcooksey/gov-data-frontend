import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConsumerComplaintsComponent } from './consumer-complaints/consumer-complaints.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsumerComplaintsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
